export const deleteProductDataMapper = (dayResponse: {
  date: string;
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
  userId: string;
  id: string;
}) => {
  return {
    date: dayResponse.date,
    kcalLeft: dayResponse.kcalLeft,
    kcalConsumed: dayResponse.kcalConsumed,
    dailyRate: dayResponse.dailyRate,
    percentsOfDailyRate: dayResponse.percentsOfDailyRate,
    userId: dayResponse.userId,
    _id: dayResponse.id,
  };
};
