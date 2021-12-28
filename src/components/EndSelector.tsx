import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

enum EndOptions {
  NEVER = "never",
  SPECIFIC = "on specific day...",
  AFTER = "after number of occurences...",
}

interface EndSelectorProps {
  endChanged: (value: EndOptions) => void;
}

const EndSelector = ({ endChanged }: EndSelectorProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={EndOptions.NEVER}
        onChange={(e) => endChanged(e.target.value.toString() as EndOptions)}
        size="small"
      >
        <MenuItem value={EndOptions.NEVER}>{EndOptions.NEVER}</MenuItem>
        <MenuItem value={EndOptions.SPECIFIC}>{EndOptions.SPECIFIC}</MenuItem>
        <MenuItem value={EndOptions.AFTER}>{EndOptions.AFTER}</MenuItem>
      </Select>
    </Grid>
  );
};

export { EndSelector, EndSelectorProps, EndOptions };
