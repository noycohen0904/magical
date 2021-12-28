import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import IconHeader from "./IconHeader";
import { Grid } from "@mui/material";
import { CustomSelect } from "./CustomSelect";
import { numberConstants } from "../utils/number-helper";
import { PeriodSelector, PeriodSelectorProps } from "./PeriodSelector";

const MAX_NUMBERS = 10;

const repeatNumberOptions = numberConstants(MAX_NUMBERS);

interface RepeatEveryProps extends PeriodSelectorProps {
  numberChanged: (value: string) => void;
  CurrentRepeatCount: string;
}

const RepeatEvery = ({
  numberChanged,
  CurrentRepeatCount,
  periodChanged,
  currentPeriod,
}: RepeatEveryProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      <IconHeader title="Repeat every">
        <ReplayIcon fontSize="small" />
      </IconHeader>
      <CustomSelect
        selected={CurrentRepeatCount}
        options={repeatNumberOptions}
        selectChanged={numberChanged}
        defaultValue={repeatNumberOptions[0]}
      />
      <PeriodSelector
        currentPeriod={currentPeriod}
        periodChanged={periodChanged}
      />
    </Grid>
  );
};

export { RepeatEvery, RepeatEveryProps };
