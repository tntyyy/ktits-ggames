import { LinkProps as ReactRouterLinkProps } from "react-router-dom";
import {AppPages} from "../../../features/navigation/types";

export type LinkProps = {
    to: AppPages;
    className?: string;
} & Omit<ReactRouterLinkProps, "to" | "className">;
