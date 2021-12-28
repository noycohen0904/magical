import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

enum Period {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

interface PeriodSelectorProps {
  periodChanged: (value: Period) => void;
}

const PeriodSelector = ({ periodChanged }: PeriodSelectorProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={Period.WEEK}
        onChange={(e) => periodChanged(e.target.value.toString() as Period)}
        size="small"
      >
        {Object.keys(Period).map((key) => (
          // @ts-ignore
          <MenuItem key={key as Period} value={Period[key as Period]}>
            {
              // @ts-ignore
              Period[key as Period]
            }
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export { PeriodSelector, Period };
