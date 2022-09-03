export const pad = (time) => {
  return `0${time}`.slice(-2);
};

export const getSimpleDateFormat = (d, separator) => {
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join(
    separator
  );
};

export const isSameDay = (a, b) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};
