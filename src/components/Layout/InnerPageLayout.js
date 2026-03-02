import React from "react";
import DemoHeaderOne from "./Header/DemoHeader/DemoHeaderOne";
import FooterOne from "./Footer/FooterOne";
import MobileHeader from "./Header/DemoHeader/DemoHeaderMobile";

export default function InnerPageLayout({ children }) {
  return (
    <div>
      <DemoHeaderOne />
      <MobileHeader />
      {children}
      <FooterOne />
    </div>
  );
}
