import React from "react";
import { Grid } from "@mui/material";
import IconHeader from "./IconHeader";
import { DaysButtons, DaysButtonsProps } from "./DaysButtons";
import { CustomSelect } from "./CustomSelect";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

interface RepeatOnProps extends DaysButtonsProps {
  isWeek: boolean;
  isMonth: boolean;
  monthRepeatChanged: (value: string) => void;
  options: string[];
}

const RepeatOn = ({
  isWeek,
  isMonth,
  selectedDays,
  dayClicked,
  monthRepeatChanged,
  options,
}: RepeatOnProps) => {
  return (
    <Grid container item spacing={1} alignItems="center">
      {(isWeek || isMonth) && (
        <IconHeader title="Repeat on">
          <CachedRoundedIcon fontSize="small" />
        </IconHeader>
      )}
      {isWeek && (
        <DaysButtons selectedDays={selectedDays} dayClicked={dayClicked} />
      )}
      {isMonth && (
        <CustomSelect
          options={options}
          selectChanged={monthRepeatChanged}
          defaultValue={options[0]}
        />
      )}
    </Grid>
  );
};

export default RepeatOn;
