import { Dialog, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import IconHeader from "./IconHeader";
import ReplayIcon from "@mui/icons-material/Replay";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Button from "@mui/material/Button";
import {
  AFTER,
  CustomSelect,
  endConstants,
  MONTH,
  NEVER,
  numberConstants,
  repeatEveryConstants,
  SPECIFIC,
  WEEK,
} from "./CustomSelect";
import { Days, DaysButtons } from "./DaysButtons";
import { occuredInMonth, ordinalSuffixOf } from "../utils/dateHelper";
import Calender from "./Calender";

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
  const [repeatEvery, setRepeatEvery] = useState<string>(WEEK);
  const [selectedDays, setSelectedDays] = useState<string[]>([
    Days[date.getDay()],
  ]);
  const [monthRepeat, setMonthRepeat] = useState<string>(
    repeatOnMonthOptions[0]
  );
  const [ends, setEnds] = useState<string>(NEVER);
  const [occurence, setOccurence] = useState<string>("1");
  const [endDate, setEndDate] = useState<Date>(date);

  const handleEveryNumberChanged = (value: string) => {
    setRepeatEveryNumberChanged(value);
    console.log("handleNumberChanged " + value);
  };

  const handleRepeatEverySelectorChange = (valueChanged: string) => {
    setRepeatEvery(valueChanged);
    console.log("handleRepeatEverySelectorChange " + valueChanged);
  };

  const handleSelectedDaysChanged = (dayClicked: string) => {
    const index = selectedDays.indexOf(dayClicked);
    if (index > -1) selectedDays.splice(index, 1);
    else selectedDays.push(dayClicked);

    if (selectedDays.length === 0) setSelectedDays([Days[date.getDay()]]);
    else setSelectedDays([...selectedDays]);

    console.log("handleSelectedDaysChanged " + dayClicked);
  };

  const handleMonthRepeatChanged = (valueChanged: string) => {
    setMonthRepeat(valueChanged);
    console.log("handleMonthRepeatChanged " + valueChanged);
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
        <Grid container item spacing={1} alignItems="center">
          <IconHeader title="Repeat every">
            <ReplayIcon />
          </IconHeader>
          <CustomSelect
            options={numberConstants}
            selectChanged={handleEveryNumberChanged}
            defaultValue={numberConstants[0]}
          />
          <CustomSelect
            options={repeatEveryConstants}
            selectChanged={handleRepeatEverySelectorChange}
            defaultValue={WEEK}
          />
        </Grid>
        <Grid container item spacing={1} alignItems="center">
          {(repeatEvery === MONTH || repeatEvery === WEEK) && (
            <IconHeader title="Repeat on">
              <EventRepeatIcon />
            </IconHeader>
          )}
          {repeatEvery === WEEK && (
            <DaysButtons
              selectedDays={selectedDays}
              selectedDaysChanged={handleSelectedDaysChanged}
            />
          )}
          {repeatEvery === MONTH && (
            <CustomSelect
              options={repeatOnMonthOptions}
              selectChanged={handleMonthRepeatChanged}
              defaultValue={repeatOnMonthOptions[0]}
            />
          )}
        </Grid>
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
        <Grid
          container
          item
          justifyContent="flex-end"
          spacing={1}
          sx={{ paddingBottom: "10px", paddingRight: "2%" }}
        >
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              onClick={() => closeDialog()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => handleDoneDialog()}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CustomDialog;
