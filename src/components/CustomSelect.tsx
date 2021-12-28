import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

interface CustomSelectProps {
  options: string[];
  selectChanged: (valueChanged: string) => void;
  defaultValue: string;
  selected: string;
}

const CustomSelect = ({
  options,
  selectChanged,
  defaultValue,
  selected,
}: CustomSelectProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={defaultValue}
        onChange={(e) => selectChanged(e.target.value.toString())}
        size="small"
        value={selected}
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
