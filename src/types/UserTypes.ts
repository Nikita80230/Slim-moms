export type UserData = {
  weight: null | number;
  height: null | number;
  age: null | number;
  bloodType: null | number;
  desiredWeight: null | number;
  dailyRate: null | number;
  notAllowedProducts: string[] | null;
};

export type UserAuthData = {
  email: string;
  password: string;
  username?: string;
};

export type UserResponse = {
  email: string | null;
  username: string | null;
  id: string | null;
  userData: UserData | null;
};

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
