import React from "react";
import { Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

interface CalenderProps {
  currentDate: Date;
  chosenDate: Date;
  clickedDate: (dateChanged: Date | null) => void;
}

const Calender = ({ currentDate, chosenDate, clickedDate }: CalenderProps) => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <Grid item>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div>calender</div>
        {/* <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        {/* <DatePicker
          minDate={currentDate}
          value={chosenDate}
          inputFormat="MMMM dd, yyyy"
          onChange={(newValue) => {
            clickedDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("EVENT");
              }}
            />
          )}
        /> */}
      </LocalizationProvider>
    </Grid>
  );
};

export default Calender;
