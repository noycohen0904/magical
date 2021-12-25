import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

interface selectOptionsInterface {
  id: number;
  text: string;
}

const repeatEveryConstants: selectOptionsInterface[] = [
  { id: 1, text: "day" },
  { id: 2, text: "week" },
  { id: 3, text: "month" },
  { id: 4, text: "year" },
];

const numberConstants: selectOptionsInterface[] = [
  { id: 1, text: "1" },
  { id: 2, text: "2" },
  { id: 3, text: "3" },
  { id: 4, text: "4" },
  { id: 5, text: "5" },
  { id: 6, text: "6" },
  { id: 7, text: "7" },
  { id: 8, text: "8" },
  { id: 9, text: "9" },
  { id: 10, text: "10" },
];

interface CustomSelectProps {
  options: selectOptionsInterface[];
}

const CustomSelect = ({ options }: CustomSelectProps) => {
  return (
    <Grid item>
      <Select defaultValue={1}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export { CustomSelect, repeatEveryConstants, numberConstants };
