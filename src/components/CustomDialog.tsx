import { Dialog, Grid } from "@mui/material";
import React, { useState } from "react";
import { Days, DAY_VALUES } from "./DaysButtons";
import { occuredInMonth, ordinalSuffixOf } from "../utils/date-helper";
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
  selectedDays?: Days[];
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
      DAY_VALUES[date.getDay()] +
      " of the month",
  ];

  const [repeatCount, setRepeatCount] = useState<string>("1");
  const [period, setPeriod] = useState<Period>(Period.WEEK);
  const [selectedDays, setSelectedDays] = useState<Days[]>([
    DAY_VALUES[date.getDay()],
  ]);
  const [monthRepeat, setMonthRepeat] = useState<string>(
    repeatOnMonthOptions[0]
  );
  const [ends, setEnds] = useState<EndOptions>(EndOptions.NEVER);
  const [endsCount, setEndsCount] = useState<string>("1");
  const [endDate, setEndDate] = useState<Date>(date);

  const handleSelectedDaysChanged = (dayClicked: Days) => {
    const index = selectedDays.indexOf(dayClicked);
    if (index > -1) selectedDays.splice(index, 1);
    else selectedDays.push(dayClicked);

    if (selectedDays.length === 0) setSelectedDays([DAY_VALUES[date.getDay()]]);
    else setSelectedDays([...selectedDays]);

    console.log("handleSelectedDaysChanged " + dayClicked);
  };

  const handleDoneDialog = () => {
    const data: Result = {
      repeatCount: repeatCount,
      repeatEvery: period,
      ends: ends,
    };

    if (period === Period.WEEK) data.selectedDays = selectedDays;
    if (period === Period.MONTH) data.monthRepeat = monthRepeat;

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
          CurrentRepeatCount={repeatCount}
          periodChanged={(value: Period) => setPeriod(value)}
          currentPeriod={period}
        />
        <RepeatOn
          isWeek={period === Period.WEEK}
          isMonth={period === Period.MONTH}
          selectedDays={selectedDays}
          dayClicked={handleSelectedDaysChanged}
          monthRepeatChanged={(valueChanged) => setMonthRepeat(valueChanged)}
          options={repeatOnMonthOptions}
          currentMonthRepeat={monthRepeat}
        />
        <End
          endChanged={(value: EndOptions) => setEnds(value)}
          isEnd={ends === EndOptions.AFTER}
          occurenceChanged={(value) => setEndsCount(value)}
          currentEndsCount={endsCount}
          isSpecific={ends === EndOptions.SPECIFIC}
          currentDate={date}
          chosenDate={endDate}
          clickedDate={(newDate) => setEndDate(newDate)}
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
