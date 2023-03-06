import React, { FC } from 'react';
import styles from './Button.module.css';
import {ButtonProps} from "./Button.types";
import cn from "classnames";

const Button: FC<ButtonProps> = (
    {
        className,
        leftIcon,
        rightIcon,
        leftIconClassName,
        rightIconClassName,
        children
    }) => {

  return (
      <button className={cn(styles.button, className)}>
          {
              leftIcon &&
              <div className={leftIconClassName}>
                  <img src={leftIcon} alt={leftIcon} />
              </div>
          }
          {children}
          {
              rightIcon &&
              <div className={rightIconClassName}>
                  <img src={rightIcon} alt={rightIcon} />
              </div>
          }
      </button>
  );
};

export default React.memo(Button);
