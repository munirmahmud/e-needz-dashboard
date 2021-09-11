import React from "react";

const FooterCopyright = () => {
  return (
    <div className="ps-copyright">
      <img src="/img/logo.png" alt="" />
      <p>
        &copy; {new Date().getFullYear()} E-needz. <br /> All rights reversed.
      </p>
    </div>
  );
};

export default FooterCopyright;
