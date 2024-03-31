import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn, selectUser } from "@/redux/user/userSlice";

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
  const userDailyRate = useAppSelector(selectUser)?.userData.dailyRate;
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn && userDailyRate) {
    return <Navigate to={redirectTo} replace />;
  }
  if (isLoggedIn) {
    return <Navigate to={RoutePath.CALCULATOR} replace />;
  }
  return children;
};

export default RestrictedRoute;
