import React from "react";
import { Grid } from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

interface CalenderProps {
  currentDate: Date;
  chosenDate: Date;
  clickedDate: (dateChanged: Date | null) => void;
}

const Calender = ({ currentDate, chosenDate, clickedDate }: CalenderProps) => {
  return (
    <Grid item>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          value={chosenDate}
          minDate={currentDate}
          inputVariant="outlined"
          variant="inline"
          autoOk={true}
          format="MMMM dd, yyyy"
          onChange={(newDate: any) => {
            clickedDate(newDate);
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default Calender;
