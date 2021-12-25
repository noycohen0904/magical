import { Dialog, DialogTitle, Grid } from "@mui/material";
import React from "react";
import IconHeader from "./IconHeader";
import ReplayIcon from "@mui/icons-material/Replay";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

interface CustomReacurrenceDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
  doneDialog: (data: any) => void;
}

const CustomReacurrenceDialog = ({
  title,
  open,
  closeDialog,
  doneDialog,
}: CustomReacurrenceDialogProps) => {
  const handleCloseDialog = () => {
    closeDialog();
  };

  const handleDoneDialog = (data: any) => {
    doneDialog(data);
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
