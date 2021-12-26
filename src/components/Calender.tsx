import React from "react";
import { Grid, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

interface CalenderProps {
  currentDate: Date;
  clickedDate: (dateChanged: Date | null) => void;
}

const Calender = ({ currentDate, clickedDate }: CalenderProps) => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <Grid item>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={date}
          minDate={currentDate}
          onChange={(newDate) => {
            clickedDate(newDate);
            setDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  );
};

export default Calender;
