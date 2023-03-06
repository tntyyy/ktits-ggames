import {createBrowserRouter} from "react-router-dom";
import {AppPages} from "./types";

export const AppRouter = createBrowserRouter([
    {
        path: AppPages.HOME,
        element: "Home"
    },
    {
        path: AppPages.PRODUCT,
        element: "product"
    },
    {
        path: AppPages.PROFILE,
        element: "profile"
    },
    {
        path: AppPages.NOTFOUND,
        element: "404"
    }
]);
