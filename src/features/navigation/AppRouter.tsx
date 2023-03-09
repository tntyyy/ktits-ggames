import {createBrowserRouter} from "react-router-dom";
import {AppPages} from "./types";
import Home from "../../pages/Home/Home";
import PageLayout from "../../layouts/PageLayout/PageLayout";

export const AppRouter = createBrowserRouter([
    {
        path: AppPages.HOME,
        element: <PageLayout><Home /></PageLayout>
    },
    {
        path: AppPages.PRODUCT,
        element: <PageLayout>"product"</PageLayout>
    },
    {
        path: AppPages.PROFILE,
        element: <PageLayout>"profile"</PageLayout>
    },
    {
        path: AppPages.NOTFOUND,
        element: <PageLayout>"404"</PageLayout>
    }
]);
