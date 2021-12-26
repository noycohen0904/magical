import { Dialog, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import IconHeader from "./IconHeader";
import ReplayIcon from "@mui/icons-material/Replay";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
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
import { occuredInMonth, ordinalSuffixOf } from "../date/date";
import Calender from "./Calender";

interface CustomReacurrenceDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
  doneDialog: (data: any) => void;
  date: Date;
}

const CustomReacurrenceDialog = ({
  title,
  open,
  closeDialog,
  doneDialog,
  date,
}: CustomReacurrenceDialogProps) => {
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
  const [endDate, setEndDate] = useState<Date | null>(null);

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
      setEndDate(null);
    } else {
      console.log("handleEndDateChanged " + dateChanged!.toString());
      setEndDate(dateChanged);
    }
  };

  const handleDoneDialog = () => {
    // Build here the data
    doneDialog({ stub: "stub" });
  };

  return (
    <Dialog open={open} onClose={() => closeDialog()}>
      <DialogTitle>{title}</DialogTitle>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
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
          defaultValue={repeatEveryConstants[1]}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
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
          <Calender currentDate={date} clickedDate={handleEndDateChanged} />
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <button onClick={() => closeDialog()}>Cancle</button>
        </Grid>
        <Grid item>
          <button onClick={() => handleDoneDialog()}>Done</button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CustomReacurrenceDialog;
