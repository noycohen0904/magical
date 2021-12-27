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
  clickedDate: (dateChanged: Date) => void;
}

const Calender = ({ currentDate, chosenDate, clickedDate }: CalenderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid item>
      <Button
        variant="outlined"
        endIcon={<ArrowDropUpIcon />}
        onClick={() => setOpen(true)}
        size="small"
        sx={{ textTransform: "none" }}
      >
        {Moment(chosenDate).format("MMMM DD, yyyy")}
        {console.log(chosenDate.toString())}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            minDate={currentDate}
            displayStaticWrapperAs="desktop"
            value={chosenDate}
            onChange={(newValue) => {
              if (newValue) clickedDate(newValue);
              setOpen(false);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Dialog>
    </Grid>
  );
};

export default Calender;
