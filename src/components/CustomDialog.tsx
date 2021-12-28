import { Dialog, Grid } from "@mui/material";
import React, { useState } from "react";
import { Days } from "./DaysButtons";
import { occuredInMonth, ordinalSuffixOf } from "../utils/dateHelper";
import ActionButtons from "./ActionButtons";
import { RepeatEvery, Period } from "./RepeatEvery";
import RepeatOn from "./RepeatOn";
import { End, EndOptions } from "./End";

interface CustomDialogProps {
  title: string;
  open: boolean;
  closeDialog: () => void;
  doneDialog: (data: Result) => void;
  date: Date;
}

type Result = {
  repeatCount: string;
  repeatEvery: string;
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
  const [repeatEvery, setRepeatEvery] = useState<string>(Period.WEEK);
  const [selectedDays, setSelectedDays] = useState<string[]>([
    Days[date.getDay()],
  ]);
  const [monthRepeat, setMonthRepeat] = useState<string>(
    repeatOnMonthOptions[0]
  );
  const [ends, setEnds] = useState<string>(EndOptions.NEVER);
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

  const handleEndDateChanged = (dateChanged: Date) => {
    if (dateChanged === null) {
      console.log("handleEndDateChanged NULL");
      setEndDate(date);
    } else {
      console.log("handleEndDateChanged " + dateChanged!.toString());
      setEndDate(dateChanged);
    }
  };

  const handleDoneDialog = () => {
    const data: Result = {
      repeatCount: repeatCount,
      repeatEvery: repeatEvery,
      selectedDays: selectedDays,
      monthRepeat: monthRepeat,
      ends: ends,
      endsCount: endsCount,
      endDate: endDate,
    };

    doneDialog(data);
  };

  const closeChild = () => {
    closeDialog();
    setRepeatEvery(Period.WEEK);
  };

  return (
    <Dialog open={open} onClose={() => closeChild()}>
      <h3 style={{ paddingLeft: "2%" }}>{title}</h3>
      <Grid container spacing={3} sx={{ paddingLeft: "2%" }}>
        <RepeatEvery
          numberChanged={(value: string) => setRepeatCount(value)}
          periodChanged={(value: string) => setRepeatEvery(value)}
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
          endChanged={(value: string) => setEnds(value)}
          isEnd={ends === EndOptions.AFTER}
          occurenceChanged={(value) => setEndsCount(value)}
          isSpecific={ends === EndOptions.SPECIFIC}
          currentDate={date}
          chosenDate={endDate}
          dateChanged={(newDate) => handleEndDateChanged(newDate)}
        />
        <ActionButtons
          closeDialog={() => closeDialog()}
          handleDoneDialog={handleDoneDialog}
        />
      </Grid>
    </Dialog>
  );
};

export { CustomDialog, Result };
