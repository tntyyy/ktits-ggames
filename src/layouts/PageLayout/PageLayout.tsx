import React, { FC } from 'react';
import {PageLayoutProps} from "./PageLayout.types";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const PageLayout: FC<PageLayoutProps> = ({children}) => {

  return (
      <>
        <Header />
          {children}
        <Footer />
      </>
  );
};

export default PageLayout;
