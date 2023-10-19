import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import useRoute from "./hooks/useRoute";
import PageLayout from "../layouts/pageLayout";
import InvalidPage from "../pages/invalid";
import { RouteModel } from "./models/routeModel";
import { createElement } from "react";

export default function AppRoutes() {
    const { user, handleSetUser } = useRoute();
    const routes = RouteModel();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                    {routes.map((val, index) => {
                        return (
                            <Route
                                key={index}
                                path={val.path}
                                element={
                                    <AuthRoute
                                        user={user}
                                        publicElement={
                                            <LoginPage handleSetUser={handleSetUser} />
                                        }
                                        privateElement={
                                            <PageLayout>
                                                {createElement(val.privateElement, { user: user })}
                                            </PageLayout>
                                        }
                                    />
                                }
                            />
                        )
                    })}

                    <Route
                        path="*"
                        element={
                            <InvalidPage />
                        }
                    />
                </Routes>
            </BrowserRouter>

        </>
    )
}


function AuthRoute({user,privateElement,publicElement})
{
 return user? privateElement:publicElement;
}


