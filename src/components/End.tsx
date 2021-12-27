import React from "react";
import { Grid } from "@mui/material";
import IconHeader from "./IconHeader";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { CustomSelect } from "./CustomSelect";
import { numberConstants } from "../utils/numberHelper";
import Calender from "./Calender";

const MAX_NUMBERS = 20;

const occurenceOptions = numberConstants(MAX_NUMBERS);

enum EndOptions {
  NEVER = "never",
  SPECIFIC = "on specific day...",
  AFTER = "after number of occurences...",
}

interface EndProps {
  endChanged: (value: string) => void;
  isEnd: boolean;
  occurenceChanged: (value: string) => void;
  isSpecific: boolean;
  currentDate: Date;
  chosenDate: Date;
  dateChanged: (newDate: Date) => void;
}

const End = ({
  endChanged,
  isEnd,
  occurenceChanged,
  isSpecific,
  currentDate,
  chosenDate,
  dateChanged,
}: EndProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      <IconHeader title="Ends">
        <KeyboardTabIcon />
      </IconHeader>
      <CustomSelect
        options={Object.values(EndOptions)}
        selectChanged={endChanged}
        defaultValue={EndOptions.NEVER}
      />
      {isEnd && (
        <CustomSelect
          options={occurenceOptions}
          selectChanged={occurenceChanged}
          defaultValue={occurenceOptions[0]}
        />
      )}
      {isSpecific && (
        <Calender
          currentDate={currentDate}
          chosenDate={chosenDate}
          clickedDate={dateChanged}
        />
      )}
    </Grid>
  );
};

export { End, EndOptions };
