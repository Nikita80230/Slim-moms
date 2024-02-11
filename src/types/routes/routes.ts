export enum RoutePath {
  MAIN = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  DIARY = "/diary",
  CALCULATOR = "/calculator",
}

export type TNavLink = {
  navLinkName: string;
  navRoute: RoutePath;
};
