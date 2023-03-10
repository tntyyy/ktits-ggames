import React, {FC} from 'react';
import styles from './Header.module.css';
import {Icons} from "../../constants/icons";
import Link from "../ui/Link/Link";
import {AppPages} from "../../features/navigation/types";
import {NavLink} from "react-router-dom";

const Header: FC = () => {

  return (
      <header className={styles.header}>
          <div className={styles.wrapper}>
              <Link to={AppPages.HOME}>
                  <Icons.Logotype className={styles.logotype}/>
              </Link>
              <nav className={styles.menu}>
                  <NavLink to={AppPages.HOME}>
                      Home
                  </NavLink>
                  <NavLink to={AppPages.HOME}>
                      Catalog
                  </NavLink>
                  <NavLink to={AppPages.HOME}>
                      Sales
                  </NavLink>
                  <NavLink to={AppPages.HOME}>
                      Cart
                  </NavLink>
              </nav>
          </div>
      </header>
  );
};

export default React.memo(Header);
