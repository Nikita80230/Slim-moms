import { Route, Routes } from "react-router-dom";

import {
  CalculatorPage,
  DiaryPage,
  LoginPage,
  MainPage,
  RegisterPage,
} from "@/pages";

import { RoutePath } from "@/types/routes/routes";

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
];

function App() {
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
