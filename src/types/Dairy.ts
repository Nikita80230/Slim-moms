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

export type Day = {
  _id: string;
  eatenProducts: EatenProduct[];
  date: string;
  __v: number;
  daySummary: DaySummary;
};
// {
//             _id: string;
//             eatenProducts: EatenProduct[];
//             date: string;
//             __v: number;
//             daySummary: DaySummary;
//         }

// {
//     "eatenProduct": {
//         "title": "Жир курячий",
//         "weight": 1111,
//         "kcal": 9965.67,
//         "id": "2c7a0979-4fc7-48bb-9a39-3d0a9d51e3e7"
//     },
//     "newDay": {
//         "id": "65f06e1fc386083f6a81236f",
//         "eatenProducts": [
//             {
//                 "title": "Жир курячий",
//                 "weight": 1111,
//                 "kcal": 9965.67,
//                 "id": "2c7a0979-4fc7-48bb-9a39-3d0a9d51e3e7"
//             }
//         ],
//         "date": "2024-03-12",
//         "daySummary": "65f06e1fc386083f6a81236e"
//     },
//     "newSummary": {
//         "date": "2024-03-12",
//         "kcalLeft": 0,
//         "kcalConsumed": 9965.67,
//         "dailyRate": 2226.5,
//         "percentsOfDailyRate": 100,
//         "userId": "65df5e4cc386083f6a811f50",
//         "id": "65f06e1fc386083f6a81236e"
//     }
// }
