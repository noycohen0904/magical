import React from "react";
import { Grid } from "@mui/material";
import IconHeader from "./IconHeader";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { CustomSelect } from "./CustomSelect";
import { numberConstants } from "../utils/number-helper";
import { Calender, CalenderProps } from "./Calender";
import { EndOptions, EndSelectorProps, EndSelector } from "./EndSelector";

const MAX_NUMBERS = 20;

const occurenceOptions = numberConstants(MAX_NUMBERS);

interface EndProps extends EndSelectorProps, CalenderProps {
  isEnd: boolean;
  onEndsCountChange: (value: string) => void;
  isSpecific: boolean;
  currentEndsCount: string;
}

const End = ({
  onEndChange,
  isEnd,
  onEndsCountChange,
  currentEndsCount,
  isSpecific,
  currentDate,
  chosenDate,
  onDateChange,
}: EndProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      <IconHeader title="Ends">
        <KeyboardTabIcon fontSize="small" />
      </IconHeader>
      <EndSelector onEndChange={onEndChange} />
      {isEnd && (
        <CustomSelect
          selected={currentEndsCount}
          options={occurenceOptions}
          onSelectChange={onEndsCountChange}
          defaultValue={occurenceOptions[0]}
        />
      )}
      {isSpecific && (
        <Calender
          currentDate={currentDate}
          chosenDate={chosenDate}
          onDateChange={onDateChange}
        />
      )}
    </Grid>
  );
};

export { End, EndOptions };
