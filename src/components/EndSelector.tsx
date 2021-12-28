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
        {Object.keys(EndOptions).map((key) => (
          // @ts-ignore
          <MenuItem key={key as EndOptions} value={EndOptions[key as Period]}>
            {
              // @ts-ignore
              EndOptions[key as Period]
            }
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export { EndSelector, EndOptions };
