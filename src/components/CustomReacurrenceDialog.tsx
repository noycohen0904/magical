import { Dialog, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import IconHeader from "./IconHeader";
import ReplayIcon from "@mui/icons-material/Replay";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import {
  CustomSelect,
  endConstants,
  numberConstants,
  repeatEveryConstants,
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

  const [repeatEveryNumberChanged, setRepeatEveryNumberChanged] = useState(
    numberConstants[0]
  );
  const [repeatEvery, setRepeatEvery] = useState(repeatEveryConstants[1]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [monthRepeat, setMonthRepeat] = useState(repeatOnMonthOptions[0]);
  const [ends, setEnds] = useState(endConstants[0]);
  const [occurence, setOccurence] = useState(numberConstants[0]);
  const [endDate, setEndDate] = useState(null);

  const handleEveryNumberChanged = (value: string) => {
    setRepeatEveryNumberChanged(value);
    console.log("handleNumberChanged " + value);
  };

  const handleRepeatEverySelectorChange = (valueChanged: string) => {
    setRepeatEvery(valueChanged);
    console.log("handleRepeatEverySelectorChange " + valueChanged);
  };

  const handleSelectedDaysChanged = (dayClicked: string) => {
    // @ts-ignore
    const index = selectedDays.indexOf(dayClicked);
    if (index > -1) selectedDays.splice(index, 1);
    // @ts-ignore
    else selectedDays.push(dayClicked);

    setSelectedDays([...selectedDays]);

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
    } else {
      console.log("handleEndDateChanged " + dateChanged!.toString());
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
        <IconHeader title="Repeat on">
          <EventRepeatIcon />
        </IconHeader>
        <DaysButtons
          selectedDays={selectedDays}
          selectedDaysChanged={handleSelectedDaysChanged}
        />
        <CustomSelect
          options={repeatOnMonthOptions}
          selectChanged={handleMonthRepeatChanged}
          defaultValue={repeatOnMonthOptions[0]}
        />
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
          defaultValue={endConstants[0]}
        />
        <CustomSelect
          options={numberConstants}
          selectChanged={handleOccurenceChange}
          defaultValue={numberConstants[0]}
        />
        <Calender currentDate={date} clickedDate={handleEndDateChanged} />
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
