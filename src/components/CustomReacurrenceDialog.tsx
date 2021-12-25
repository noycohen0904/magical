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
import { DaysButtons } from "./DaysButtons";

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
}: CustomReacurrenceDialogProps) => {
  const [numberChanged, setNumberChanged] = useState(numberConstants[0]);
  const [repeatEvery, setRepeatEvery] = useState(repeatEveryConstants[1]);
  const [endChanged, setEndChanged] = useState(endConstants[0]);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCloseDialog = () => {
    closeDialog();
  };

  const handleDoneDialog = (data: any) => {
    doneDialog(data);
  };

  const handleRepeatEverySelectorChange = (valueChanged: string) => {
    setRepeatEvery(valueChanged);
    console.log("handleRepeatEverySelectorChange " + valueChanged);
  };

  const handleNumberChanged = (value: string) => {
    setNumberChanged(value);
    console.log("handleNumberChanged " + value);
  };

  const handleEndSelectorChange = (valueChanged: string) => {
    setEndChanged(valueChanged);
    console.log("handleEndSelectorChange " + valueChanged);
  };

  const handleSelectedDaysChanged = (dayClicked: string) => {
    // setSelectedDays((selectedDays) => [...selectedDays, dayClicked]);
    console.log("handleSelectedDaysChanged " + dayClicked);
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
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
          selectChanged={handleNumberChanged}
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
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <button onClick={() => handleCloseDialog()}>Cancle</button>
        </Grid>
        <Grid item>
          <button onClick={() => handleDoneDialog({ stub: "stub" })}>
            Done
          </button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CustomReacurrenceDialog;
