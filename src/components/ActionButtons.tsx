import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

interface ActionButtonsProps {
  closeDialog: () => void;
  doneDialog: () => void;
}

const ActionButtons = ({ closeDialog, doneDialog }: ActionButtonsProps) => {
  return (
    <Grid
      container
      item
      justifyContent="flex-end"
      spacing={1}
      sx={{ paddingBottom: "2%", paddingRight: "2%" }}
    >
      <Grid item>
        <Button size="small" variant="outlined" onClick={closeDialog}>
          Cancel
        </Button>
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={doneDialog}
        >
          Done
        </Button>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
