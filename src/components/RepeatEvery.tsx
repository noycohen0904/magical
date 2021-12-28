import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import IconHeader from "./IconHeader";
import { Grid } from "@mui/material";
import { CustomSelect } from "./CustomSelect";
import { numberConstants } from "../utils/number-helper";
import { Period, PeriodSelector } from "./PeriodSelector";

const MAX_NUMBERS = 10;

const repeatNumberOptions = numberConstants(MAX_NUMBERS);

interface RepeatEveryProps {
  numberChanged: (value: string) => void;
  periodChanged: (value: Period) => void;
}

const RepeatEvery = ({ numberChanged, periodChanged }: RepeatEveryProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      <IconHeader title="Repeat every">
        <ReplayIcon fontSize="small" />
      </IconHeader>
      <CustomSelect
        options={repeatNumberOptions}
        selectChanged={numberChanged}
        defaultValue={repeatNumberOptions[0]}
      />
      <PeriodSelector periodChanged={periodChanged} />
    </Grid>
  );
};

export { RepeatEvery };
