import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

const MAX_NUMBERS = 10;

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

export { CustomSelect };
