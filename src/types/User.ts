import { DaySummary, EatenProduct } from "./Dairy";

export type UserDairyData = {
  weight: number;
  height: number;
  age: number;
  bloodType: number;
  desiredWeight: number;
  dailyRate: number;
  notAllowedProducts: string[];
};

export type UserAuthFormData = {
  email: string;
  password: string;
  username?: string;
};

export type UserLoginResponse = {
  email: string;
  username: string;
  id: string;
  userData: UserDairyData;
};

export type UserTodaySummary = {
  date: string;
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
  userId: string;
  id: string;
};

export type GetUserInfoResponse = UserLoginResponse & {
  days: [
    {
      _id: string;
      eatenProducts: EatenProduct[];
      date: string;
      __v: number;
      daySummary: DaySummary;
    },
  ];
};

// {
//     "date": "2020-12-31",
//     "kcalLeft": 1000,
//     "kcalConsumed": 1000,
//     "dailyRate": 2000,
//     "percentsOfDailyRate": 50,
//     "userId": "507f1f77bcf86cd799439011",
//     "id": "507f1f77bcf86cd799439012"
//   }

// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NWRmNWU0Y2MzODYwODNmNmE4MTFmNTAiLCJzaWQiOiI2NWRmNWZmOGMzODYwODNmNmE4MTFmNTMiLCJpYXQiOjE3MDkxMzc5MTIsImV4cCI6MTcwOTE0MTUxMn0.c1kERuCx5PJ8Fo4IXE_JW-pfH1Fi428pfmn8xqDwlVo",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NWRmNWU0Y2MzODYwODNmNmE4MTFmNTAiLCJzaWQiOiI2NWRmNWZmOGMzODYwODNmNmE4MTFmNTMiLCJpYXQiOjE3MDkxMzc5MTIsImV4cCI6MTcxMTc2NTkxMn0.lRkSLGBUJADg3zHXbjIpO7RKhAmQUuj6SGeTLOf3dDU",
//     "sid": "65df5ff8c386083f6a811f53",
//     "todaySummary": {},
//     "user": {
//         "email": "m@g.com",
//         "username": "Mykyta",
//         "userData": {
//             "notAllowedProducts": [],
//             "weight": 0,
//             "height": 0,
//             "age": 0,
//             "bloodType": 0,
//             "desiredWeight": 0,
//             "dailyRate": 0
//         },
//         "id": "65df5e4cc386083f6a811f50"
//     }
// }
