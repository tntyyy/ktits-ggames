import React from "react";

export type ButtonProps = {
    leftIcon?: string;
    rightIcon?: string;
    leftIconClassName?: string;
    rightIconClassName?: string;
} & React.HTMLProps<HTMLButtonElement>;
