const ordinalSuffixOf = (day: number): string => {
  const j = day % 10;
  const k = day % 100;

  if (j === 1 && k !== 11) {
    return day + "st";
  }
  if (j === 2 && k !== 12) {
    return day + "nd";
  }
  if (j === 3 && k !== 13) {
    return day + "rd";
  }

  return day + "th";
};

const occuredInMonth = (day: number): string => {
  const occuredInMonth = Math.floor(day / 7 + 1);
  let weekString = "";

  switch (occuredInMonth) {
    case 1:
      weekString = "first";
      break;
    case 2:
      weekString = "second";
      break;
    case 3:
      weekString = "third";
      break;
    case 4:
      weekString = "fourth";
      break;
    case 5:
      weekString = "fifth";
      break;
  }

  return weekString;
};

export { ordinalSuffixOf, occuredInMonth };
