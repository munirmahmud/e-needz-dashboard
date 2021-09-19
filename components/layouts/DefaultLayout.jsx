import React from "react";
import DrawerMenu from "~/components/shared/drawers/DrawerMenu";
import HeaderMobile from "~/components/shared/headers/HeaderMobile";
import Head from "./modules/Head";

const DefaultLayout = ({ children }) => {
  return (
    <div id="e-needz">
      <Head />
      <HeaderMobile />
      {children}
      <DrawerMenu />
      <div id="loader-wrapper">
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default DefaultLayout;
