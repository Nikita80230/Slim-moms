export type UserCalculateCaloriesFormData = {
  height: string;
  age: string;
  weight: string;
  desiredWeight: string;
  bloodType: string;
};

export type CalculateCaloriesFormDataResponse = {
  height: number;
  age: number;
  weight: number;
  desiredWeight: number;
  bloodType: number;
};
