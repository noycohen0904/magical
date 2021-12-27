import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import IconHeader from "./IconHeader";
import { Grid } from "@mui/material";
import { CustomSelect } from "./CustomSelect";
import { numberConstants } from "../utils/numberHelper";

enum Period {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

const MAX_NUMBERS = 10;

const repeatNumberOptions = numberConstants(MAX_NUMBERS);

interface RepeatEveryProps {
  numberChanged: (value: string) => void;
  episodeChanged: (value: string) => void;
}

const RepeatEvery = ({ numberChanged, episodeChanged }: RepeatEveryProps) => {
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
      <CustomSelect
        options={Object.values(Period)}
        selectChanged={episodeChanged}
        defaultValue={Period.WEEK}
      />
    </Grid>
  );
};

export { RepeatEvery, Period };
