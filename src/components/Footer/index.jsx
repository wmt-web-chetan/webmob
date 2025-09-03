import React from "react";
import "./index.css";
import BottomFooter from "@/sections/Footer/BottomFooter";
import FormFooter from "@/sections/Footer/FormFooter";

const Footer = () => {
  return (
    <div className="bg-dark-bg px-wrapper section-padding-y-v2  text-white ">
      <FormFooter />
      <BottomFooter />
      
    </div>
  );
};

export default Footer;
