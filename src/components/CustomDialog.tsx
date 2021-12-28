import { Dialog, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Days } from "./DaysButtons";
import { occuredInMonth, ordinalSuffixOf } from "../utils/dateHelper";
import ActionButtons from "./ActionButtons";
import { RepeatEvery } from "./RepeatEvery";
import RepeatOn from "./RepeatOn";
import { End } from "./End";
import { EndOptions } from "./EndSelector";
import { Period } from "./PeriodSelector";

interface CustomDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
  doneDialog: (data: Result) => void;
  date: Date;
}

type Result = {
  repeatCount: string;
  repeatEvery: Period;
  selectedDays?: string[];
  monthRepeat?: string;
  ends: string;
  endsCount?: string;
  endDate?: Date;
};

const CustomDialog = ({
  title,
  open,
  closeDialog,
  doneDialog,
  date,
}: CustomDialogProps) => {
  const repeatOnMonthOptions = [
    ordinalSuffixOf(date.getDate()) + " day of the month",
    occuredInMonth(date.getDate()) +
      " " +
      Days[date.getDay()] +
      " of the month",
  ];

  const [repeatCount, setRepeatCount] = useState<string>("1");
  const [repeatEvery, setRepeatEvery] = useState<Period>(Period.WEEK);
  const [selectedDays, setSelectedDays] = useState<string[]>([
    Days[date.getDay()],
  ]);
  const [monthRepeat, setMonthRepeat] = useState<string>(
    repeatOnMonthOptions[0]
  );
  const [ends, setEnds] = useState<EndOptions>(EndOptions.NEVER);
  const [endsCount, setEndsCount] = useState<string>("1");
  const [endDate, setEndDate] = useState<Date>(date);

  const handleSelectedDaysChanged = (dayClicked: string) => {
    const index = selectedDays.indexOf(dayClicked);
    if (index > -1) selectedDays.splice(index, 1);
    else selectedDays.push(dayClicked);

    if (selectedDays.length === 0) setSelectedDays([Days[date.getDay()]]);
    else setSelectedDays([...selectedDays]);

    console.log("handleSelectedDaysChanged " + dayClicked);
  };

  const handleDoneDialog = () => {
    const data: Result = {
      repeatCount: repeatCount,
      repeatEvery: repeatEvery,
      ends: ends,
    };

    if (repeatEvery === Period.WEEK) data.selectedDays = selectedDays;
    if (repeatEvery === Period.MONTH) data.monthRepeat = monthRepeat;

    if (ends === EndOptions.AFTER) data.endsCount = endsCount;
    if (ends === EndOptions.SPECIFIC) data.endDate = endDate;

    doneDialog(data);
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      sx={{ maxWidth: "32%", marginLeft: "34%" }}
    >
      <h3 style={{ paddingLeft: "2%" }}>{title}</h3>
      <Grid container spacing={3} sx={{ paddingLeft: "2%" }} maxWidth="sm">
        <RepeatEvery
          numberChanged={(value: string) => setRepeatCount(value)}
          periodChanged={(value: Period) => setRepeatEvery(value)}
        />
        <RepeatOn
          isWeek={repeatEvery === Period.WEEK}
          isMonth={repeatEvery === Period.MONTH}
          selectedDays={selectedDays}
          dayClicked={handleSelectedDaysChanged}
          monthRepeatChanged={(valueChanged) => setMonthRepeat(valueChanged)}
          options={repeatOnMonthOptions}
        />
        <End
          endChanged={(value: EndOptions) => setEnds(value)}
          isEnd={ends === EndOptions.AFTER}
          occurenceChanged={(value) => setEndsCount(value)}
          isSpecific={ends === EndOptions.SPECIFIC}
          currentDate={date}
          chosenDate={endDate}
          dateChanged={(newDate) => setEndDate(newDate)}
        />
        <ActionButtons
          closeDialog={closeDialog}
          handleDoneDialog={handleDoneDialog}
        />
      </Grid>
    </Dialog>
  );
};

export { CustomDialog, Result };
