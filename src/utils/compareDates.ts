export const compareDates = (dayDate: string, ISODate: string) => {
  return dayDate === ISODate.slice(0, 10);
};
