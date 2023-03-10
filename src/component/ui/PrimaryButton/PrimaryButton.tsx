import React, {FC} from 'react';
import styles from './PrimaryButton.module.scss';
import {ButtonVariants, PrimaryButtonProps} from "./PrimaryButton.types";
import Button from "../Button/Button";
import cn from "classnames";

const PrimaryButton: FC<PrimaryButtonProps> = (
    {
        children,
        className,
        variant = ButtonVariants.SHARP,
        ...restButtonProps
    }
) => {

  return (
      <Button
        className={cn(styles.btn, {
            [styles.rounded]: variant === ButtonVariants.ROUNDED,
            [styles.sharp]: variant === ButtonVariants.SHARP
        })}
        {...restButtonProps}
      >
          {children}
      </Button>
  );
};

export default React.memo(PrimaryButton);
