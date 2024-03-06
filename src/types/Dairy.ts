// export type UserCalculateCaloriesFormData = {
//   height: string;
//   age: string;
//   weight: string;
//   desiredWeight: string;
//   bloodType: string;
// };

export type CalculateCaloriesFormData<T extends string | number = number> = {
  height: T;
  age: T;
  weight: T;
  desiredWeight: T;
  bloodType: T;
};

export type EatenProduct = {
  title: string;
  weight: number;
  kcal: number;
  id: string;
};

export type DaySummary = {
  date: string;
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
  userId: string;
  _id: string;
  __v?: number;
};
