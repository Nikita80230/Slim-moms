import { Route, Routes } from "react-router-dom";

import {
  CalculatorPage,
  DiaryPage,
  LoginPage,
  MainPage,
  MobileAddProductPage,
  RegisterPage,
} from "@/pages";

import { RoutePath } from "@/routes/routes";
import { useAppDispatch } from "./hooks/hooks";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";

export const appRoutes = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutePath.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: RoutePath.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RoutePath.DIARY,
    element: <DiaryPage />,
  },
  {
    path: RoutePath.CALCULATOR,
    element: <CalculatorPage />,
  },
  {
    path: RoutePath.MOBILE_ADD_PRODUCT_PAGE,
    element: <MobileAddProductPage />,
  },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        {appRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
