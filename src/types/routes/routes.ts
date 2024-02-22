export enum RoutePath {
  MAIN = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  DIARY = "/diary",
  CALCULATOR = "/calculator",
  MOBILE_ADD_PRODUCT_PAGE = "/mobile-add-product-page",
}

export type TNavLink = {
  navLinkName: string;
  navRoute: RoutePath;
};
