import React from "react";
import { MenuItem, Select, Grid } from "@mui/material";

enum Period {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

interface PeriodSelectorProps {
  onPeriodChange: (value: Period) => void;
  currentPeriod: Period;
}

const PeriodSelector = ({
  onPeriodChange,
  currentPeriod,
}: PeriodSelectorProps) => {
  return (
    <Grid item>
      <Select
        defaultValue={Period.WEEK}
        onChange={(e) => onPeriodChange(e.target.value.toString() as Period)}
        size="small"
        value={currentPeriod}
      >
        <MenuItem value={Period.DAY}>{Period.DAY}</MenuItem>
        <MenuItem value={Period.WEEK}>{Period.WEEK}</MenuItem>
        <MenuItem value={Period.MONTH}>{Period.MONTH}</MenuItem>
        <MenuItem value={Period.YEAR}>{Period.YEAR}</MenuItem>
      </Select>
    </Grid>
  );
};

export { PeriodSelector, PeriodSelectorProps, Period };
