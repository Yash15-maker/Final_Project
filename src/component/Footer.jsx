import React from "react";

const siteFooter = () => {
  window.open("https://www.highradius.com/privacy-policy/")
}


const Footer = () => {
  return (
    <center style={{ paddingTop: "10px",color: "white" }}>
      <a onClick={siteFooter} style={{color: "#1365DD"}} target_blank><u>Privacy Policy</u></a>|&copy; 2022 Highradius Corporation. All rights reserved.
    </center>
  );
};



export default Footer;