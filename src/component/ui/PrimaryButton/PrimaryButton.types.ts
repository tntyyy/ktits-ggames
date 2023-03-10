import {ButtonProps} from "../Button/Button.types";

export enum ButtonVariants {
    ROUNDED = "rounded",
    SHARP = "sharp",
}

export type PrimaryButtonProps = {
    variant: ButtonVariants;
} & ButtonProps;
