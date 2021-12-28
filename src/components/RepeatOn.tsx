import React from "react";
import { Grid } from "@mui/material";
import IconHeader from "./IconHeader";
import { DaysButtons, DaysButtonsProps } from "./DaysButtons";
import { CustomSelect } from "./CustomSelect";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

interface RepeatOnProps extends DaysButtonsProps {
  isWeek: boolean;
  isMonth: boolean;
  onMonthRepeatChange: (value: string) => void;
  options: string[];
  currentMonthRepeat: string;
}

const RepeatOn = ({
  isWeek,
  isMonth,
  selectedDays,
  onDayClick,
  onMonthRepeatChange,
  currentMonthRepeat,
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
        <DaysButtons selectedDays={selectedDays} onDayClick={onDayClick} />
      )}
      {isMonth && (
        <CustomSelect
          selected={currentMonthRepeat}
          options={options}
          onSelectChange={onMonthRepeatChange}
          defaultValue={options[0]}
        />
      )}
    </Grid>
  );
};

export default RepeatOn;
