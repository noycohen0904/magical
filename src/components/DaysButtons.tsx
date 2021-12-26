import React from "react";
import { Grid } from "@mui/material";

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

  return (
    <>
      {Days.map((option) => (
        <Grid item key={option}>
          {selectedDays.find((day) => day === option) ? (
            <button onClick={() => handleDayClicked(option)} key={option}>
              X
            </button>
          ) : (
            <button onClick={() => handleDayClicked(option)} key={option}>
              {option[0]}
            </button>
          )}
        </Grid>
      ))}
    </>
  );
};

export { DaysButtons, Days };
