import { Dialog, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import IconHeader from "./IconHeader";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import {
  AFTER,
  CustomSelect,
  endConstants,
  NEVER,
  numberConstants,
  SPECIFIC,
} from "./CustomSelect";
import { Days, DaysButtons } from "./DaysButtons";
import { occuredInMonth, ordinalSuffixOf } from "../utils/dateHelper";
import Calender from "./Calender";
import ActionButtons from "./ActionButtons";
import { RepeatEvery, Episode } from "./RepeatEvery";
import RepeatOn from "./RepeatOn";

interface CustomDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
  doneDialog: (data: any) => void;
  date: Date;
}

const CustomDialog = ({
  title,
  open,
  closeDialog,
  doneDialog,
  date,
}: CustomDialogProps) => {
  const repeatOnMonthOptions = [
    ordinalSuffixOf(date.getDate()) + " day of the month",
    occuredInMonth(date.getDate()) +
      " " +
      Days[date.getDay()] +
      " of the month",
  ];

  const [repeatEveryNumberChanged, setRepeatEveryNumberChanged] =
    useState<string>("1");
  const [repeatEvery, setRepeatEvery] = useState<string>(Episode.WEEK);
  const [selectedDays, setSelectedDays] = useState<string[]>([
    Days[date.getDay()],
  ]);
  const [monthRepeat, setMonthRepeat] = useState<string>(
    repeatOnMonthOptions[0]
  );
  const [ends, setEnds] = useState<string>(NEVER);
  const [occurence, setOccurence] = useState<string>("1");
  const [endDate, setEndDate] = useState<Date>(date);

  const handleSelectedDaysChanged = (dayClicked: string) => {
    const index = selectedDays.indexOf(dayClicked);
    if (index > -1) selectedDays.splice(index, 1);
    else selectedDays.push(dayClicked);

    if (selectedDays.length === 0) setSelectedDays([Days[date.getDay()]]);
    else setSelectedDays([...selectedDays]);

    console.log("handleSelectedDaysChanged " + dayClicked);
  };

  const handleEndSelectorChange = (valueChanged: string) => {
    setEnds(valueChanged);
    console.log("handleEndSelectorChange " + valueChanged);
  };

  const handleOccurenceChange = (valueChange: string) => {
    setOccurence(valueChange);
    console.log("handleOccurenceChange " + valueChange);
  };

  const handleEndDateChanged = (dateChanged: Date | null) => {
    if (dateChanged === null) {
      console.log("handleEndDateChanged NULL");
      setEndDate(date);
    } else {
      console.log("handleEndDateChanged " + dateChanged!.toString());
      setEndDate(dateChanged);
    }
  };

  const handleDoneDialog = () => {
    // Build here the data
    // Check validation
    doneDialog({ stub: "stub" });
  };

  return (
    <Dialog open={open} onClose={() => closeDialog()}>
      <DialogTitle sx={{ paddingLeft: "2%" }}>{title}</DialogTitle>
      <Grid container spacing={1} sx={{ paddingLeft: "2%" }}>
        <RepeatEvery
          numberChanged={(value: string) => setRepeatEveryNumberChanged(value)}
          episodeChanged={(value: string) => setRepeatEvery(value)}
        />
        <RepeatOn
          isWeek={repeatEvery === Episode.WEEK}
          isMonth={repeatEvery === Episode.MONTH}
          selectedDays={selectedDays}
          dayClicked={handleSelectedDaysChanged}
          monthRepeatChanged={(valueChanged) => setMonthRepeat(valueChanged)}
          options={repeatOnMonthOptions}
        />
        <Grid container item spacing={1} alignItems="center">
          <IconHeader title="Ends">
            <KeyboardTabIcon />
          </IconHeader>
          <CustomSelect
            options={endConstants}
            selectChanged={handleEndSelectorChange}
            defaultValue={NEVER}
          />
          {ends === AFTER && (
            <CustomSelect
              options={numberConstants}
              selectChanged={handleOccurenceChange}
              defaultValue={numberConstants[0]}
            />
          )}
          {ends === SPECIFIC && (
            <Calender
              currentDate={date}
              chosenDate={endDate}
              clickedDate={handleEndDateChanged}
            />
          )}
        </Grid>
        <ActionButtons
          closeDialog={closeDialog}
          handleDoneDialog={handleDoneDialog}
        />
      </Grid>
    </Dialog>
  );
};

export default CustomDialog;
