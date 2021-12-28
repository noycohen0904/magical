import React, { useState } from "react";
import { Grid, Dialog } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Moment from "moment";

interface CalenderProps {
  currentDate: Date;
  chosenDate: Date;
  onDateChange: (dateChanged: Date) => void;
}

const Calender = ({ currentDate, chosenDate, onDateChange }: CalenderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid item>
      <Button
        variant="outlined"
        endIcon={<ArrowDropUpIcon />}
        onClick={() => setOpen(true)}
        size="medium"
      >
        {Moment(chosenDate).format("MMMM DD, yyyy")}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            minDate={currentDate}
            displayStaticWrapperAs="desktop"
            value={chosenDate}
            onChange={(newValue) => {
              if (newValue) onDateChange(newValue);
              setOpen(false);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Dialog>
    </Grid>
  );
};

export { Calender, CalenderProps };
