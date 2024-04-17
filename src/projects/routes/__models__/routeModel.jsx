import DashboardPage from "../../pages/dashboard";
import LoginPage from "../../pages/login";
import Test from "../../pages/test";

export default function RouteModel() {
  return [
    {
      path: "/",
      privateElement: DashboardPage,
    },
    {
      path: "/login",
      privateElement: LoginPage,
    },
    {
      path: "/test",
      privateElement: Test,
    },
  ];
}
