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

export type AddProductResponse = {
  eatenProduct: EatenProduct;
  day: {
    id: string;
    eatenProducts: EatenProduct[];
    date: string;
    daySummary: string;
  };
  daySummary: DaySummary;
};

export type AddFirstProductResponse = {
  eatenProduct: EatenProduct;
  newDay: {
    id: string;
    eatenProducts: EatenProduct[];
    date: string;
    daySummary: string;
  };
  newSummary: DaySummary;
};

export type TDay = {
  _id: string;
  eatenProducts: EatenProduct[];
  date: string;
  __v: number;
  daySummary: DaySummary;
};

// export type FormattedDay = {};

// "day": {
//         "id": "65f16e61c386083f6a812409",
//         "eatenProducts": [
//             {
//                 "title": "Жир кістковий топлений",
//                 "weight": 1111,
//                 "kcal": 9965.67,
//                 "id": "e0508dc4-e199-4605-8b39-9f915056e892"
//             },
//             {
//                 "title": "Гречана крупа (ядриця) зелена",
//                 "weight": 111,
//                 "kcal": 328.56,
//                 "id": "46cd186d-db66-4e99-9f01-6580971bd698"
//             }
//         ],
//         "date": "2024-03-13",
//         "daySummary": "65f16e61c386083f6a812408"
//     },
//     "daySummary": {
//         "date": "2024-03-13",
//         "kcalLeft": 0,
//         "kcalConsumed": 10294.23,
//         "dailyRate": 3336.5,
//         "percentsOfDailyRate": 100,
//         "userId": "65f16c74c386083f6a812403",
//         "id": "65f16e61c386083f6a812408"
//     }
