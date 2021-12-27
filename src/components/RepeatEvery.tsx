import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import IconHeader from "./IconHeader";
import { Grid } from "@mui/material";
import { CustomSelect } from "./CustomSelect";

enum Episode {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

const MAX_NUMBERS = 10;

const numberConstants: string[] = Array.from(Array(MAX_NUMBERS).keys()).map(
  (value) => (value + 1).toString()
);

interface RepeatEveryProps {
  numberChanged: (value: string) => void;
  episodeChanged: (value: string) => void;
}

const RepeatEvery = ({ numberChanged, episodeChanged }: RepeatEveryProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      <IconHeader title="Repeat every">
        <ReplayIcon />
      </IconHeader>
      <CustomSelect
        options={numberConstants}
        selectChanged={numberChanged}
        defaultValue={numberConstants[0]}
      />
      <CustomSelect
        options={Object.values(Episode)}
        selectChanged={episodeChanged}
        defaultValue={Episode.WEEK}
      />
    </Grid>
  );
};

export { RepeatEvery, Episode };
