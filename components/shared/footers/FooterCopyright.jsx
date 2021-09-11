import Link from "next/link";
import React from "react";

const FooterCopyright = () => {
  return (
    <div className="ps-copyright text-center">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="e-needz" width="70" />
        </a>
      </Link>
      <p>
        &copy; {new Date().getFullYear()} E-needz. <br /> All rights reversed.
      </p>
    </div>
  );
};

export default FooterCopyright;
