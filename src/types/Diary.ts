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

export type Product = {
  _id: string;
  categories: {
    ru: string;
    uk: string;
    en: string;
  };
  weight: number;
  title: {
    ua: string;
    en: string;
  };
  calories: number;
  groupBloodNotAllowed: (null | boolean)[];
  __v: number;
};

export type LoggedInUserDailyRate = {
  dailyRate: number;
  summary: DaySummary;
  id: string;
  notAllowedProducts: string[];
};
// ==================================================
export type TDay = {
  //for get user info response треба змінити всюди в слайсі
  _id: string;
  eatenProducts: EatenProduct[];
  date: string;
  __v: number;
  daySummary: DaySummary;
};

export type FormattedDay = {
  id: string;
  eatenProducts: EatenProduct[];
  date: string;
  daySummary: DaySummary;
};
