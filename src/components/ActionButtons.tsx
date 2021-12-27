import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

interface ActionButtonsProps {
  closeDialog: () => void;
  handleDoneDialog: () => void;
}

const ActionButtons = ({
  closeDialog,
  handleDoneDialog,
}: ActionButtonsProps) => {
  return (
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
          onClick={closeDialog}
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDoneDialog}
          sx={{ textTransform: "none" }}
        >
          Done
        </Button>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
