import { useEffect } from "react";
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

import { ProtectedRoute, RestrictedRoute } from "./components";
import { useAppDispatch } from "./hooks/hooks";
import { refresh } from "./redux/user/operations";

export const appRoutes = [
  {
    path: RoutePath.MAIN,
    element: (
      <RestrictedRoute>
        <MainPage />
      </RestrictedRoute>
    ),
  },
  {
    path: RoutePath.REGISTER,

    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: RoutePath.LOGIN,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: RoutePath.DIARY,
    element: (
      <ProtectedRoute>
        <DiaryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: RoutePath.CALCULATOR,
    element: (
      <ProtectedRoute>
        <CalculatorPage />
      </ProtectedRoute>
    ),
  },
  {
    path: RoutePath.MOBILE_ADD_PRODUCT_PAGE,
    element: (
      <ProtectedRoute>
        <MobileAddProductPage />
      </ProtectedRoute>
    ),
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
