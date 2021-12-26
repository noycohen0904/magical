import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

const NEVER = "never";
const SPECIFIC = "on specific day...";
const AFTER = "after number of occurences...";

const DAY = "day";
const WEEK = "week";
const MONTH = "month";
const YEAR = "year";

const repeatEveryConstants: string[] = [DAY, WEEK, MONTH, YEAR];

const endConstants: string[] = [NEVER, SPECIFIC, AFTER];

const MAX_NUMBERS = 10;

const numberConstants: string[] = Array.from(Array(MAX_NUMBERS).keys()).map(
  (value) => (value + 1).toString()
);

interface CustomSelectProps {
  options: string[];
  selectChanged: (valueChanged: string) => void;
  defaultValue: string;
}

const CustomSelect = ({
  options,
  selectChanged,
  defaultValue,
}: CustomSelectProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={defaultValue}
        onChange={(e) => selectChanged(e.target.value.toString())}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export {
  CustomSelect,
  repeatEveryConstants,
  numberConstants,
  endConstants,
  NEVER,
  SPECIFIC,
  AFTER,
  WEEK,
  MONTH,
};
