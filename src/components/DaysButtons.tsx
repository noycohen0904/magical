import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

enum Days {
  SUNDAY = "Sunday",
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
}

const DAY_VALUES: Days[] = Object.values(Days) as Days[];

interface DaysButtonsProps {
  selectedDays: Days[];
  selectedDaysChanged: (dayClicked: Days) => void;
}

const DaysButtons = ({
  selectedDays,
  selectedDaysChanged,
}: DaysButtonsProps) => {
  const variantType = (option: Days): "contained" | "outlined" => {
    return selectedDays.find((day) => day === option)
      ? "contained"
      : "outlined";
  };

  return (
    <>
      {DAY_VALUES.map((option) => (
        <Grid item key={option}>
          <Button
            size="small"
            variant={variantType(option)}
            onClick={() => selectedDaysChanged(option)}
            key={option}
            sx={{
              maxWidth: "30px",
              maxHeight: "35px",
              minWidth: "30px",
              minHeight: "35px",
            }}
          >
            {option[0]}
          </Button>
        </Grid>
      ))}
    </>
  );
};

export { DaysButtons, Days, DAY_VALUES };
