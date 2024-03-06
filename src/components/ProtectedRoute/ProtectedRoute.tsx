import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import { RoutePath } from "@/routes/routes";

type Props = {
  children: ReactNode;
  redirectTo?: RoutePath;
};

const ProtectedRoute: FC<Props> = ({
  children,
  redirectTo = RoutePath.MAIN,
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ children, redirectTo = routes.HOME }) => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
// };
