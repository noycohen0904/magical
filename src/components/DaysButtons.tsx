import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

const Days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Staurday",
];

interface DaysButtonsProps {
  selectedDays: string[];
  selectedDaysChanged: (dayClicked: string) => void;
}

const DaysButtons = ({
  selectedDays,
  selectedDaysChanged,
}: DaysButtonsProps) => {
  const handleDayClicked = (day: string) => {
    console.log("handle day clicked inside DaysButtons - " + day);
    selectedDaysChanged(day);
  };

  const variantType = (option: string): "contained" | "outlined" => {
    return selectedDays.find((day) => day === option)
      ? "contained"
      : "outlined";
  };

  return (
    <>
      {Days.map((option) => (
        <Grid item key={option}>
          <Button
            size="small"
            variant={variantType(option)}
            onClick={() => handleDayClicked(option)}
            key={option}
            sx={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
            }}
          >
            {option[0]}
          </Button>
        </Grid>
      ))}
    </>
  );
};

export { DaysButtons, Days };
