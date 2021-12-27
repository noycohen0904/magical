const numberConstants = (maxNumbers: number): string[] =>
  Array.from(Array(maxNumbers).keys()).map((value) => (value + 1).toString());

export { numberConstants };
