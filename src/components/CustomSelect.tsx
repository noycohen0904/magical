import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

interface CustomSelectProps {
  options: string[];
  onSelectChange: (valueChanged: string) => void;
  defaultValue: string;
  selected: string;
}

const CustomSelect = ({
  options,
  onSelectChange,
  defaultValue,
  selected,
}: CustomSelectProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={defaultValue}
        onChange={(e) => onSelectChange(e.target.value.toString())}
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
