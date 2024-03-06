import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import { RoutePath } from "@/routes/routes";

type Props = {
  children: ReactNode;
  redirectTo?: RoutePath;
};

const RestrictedRoute: FC<Props> = ({
  children,
  redirectTo = RoutePath.DIARY,
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
