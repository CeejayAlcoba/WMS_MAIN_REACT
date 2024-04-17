import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import PageLayout from "../layouts/pageLayout";
import InvalidPage from "../pages/invalid";
import RouteModel from "./__models__/routeModel";
import { createElement } from "react";
import useUser from "../hooks/useUser";

export default function AppRoutes() {
  //  = useRoute();

  const routes = RouteModel();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RenderRoutes(routes)}

          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AuthRoute({ user, privateElement, publicElement }) {
  return user ? privateElement : publicElement;
}

function RenderRoutes(routes) {
  const { user, handleSetUser } = useUser();
  return routes.map((data, index) => {
    return (
      <Route
        key={index}
        path={data.path}
        element={
          <AuthRoute
            user={user}
            publicElement={<LoginPage handleSetUser={handleSetUser} />}
            privateElement={
              <PageLayout>
                {createElement(data.privateElement, { user: user })}
              </PageLayout>
            }
          />
        }
      />
    );
  });
}
