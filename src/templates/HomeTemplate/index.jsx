import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles.mudules.scss";
import Footer from "components/FooterA";
import Header from "components/Header";

const HomeTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
