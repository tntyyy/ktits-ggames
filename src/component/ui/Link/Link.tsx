import React, { FC } from 'react';
import { Link as ReactRouterLink } from "react-router-dom";
import cn from "classnames";
import styles from './Link.module.css';
import {LinkProps} from "./Link.types";

const Link: FC<LinkProps> = ({to, className, children, ...restProps}) => {

  return (
      <ReactRouterLink to={to} className={cn(styles.link, className)} {...restProps}>
          {children}
      </ReactRouterLink>
  );
};

export default React.memo(Link);
