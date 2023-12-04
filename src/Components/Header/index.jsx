import React from "react";
import Logo from "../../../public/assets/logo.png";
import Moon from "../../../public/assets/moon.png";
import Sun from "../../../public/assets/sun.png";
import "./style.css";

const Head = (props) => {

  const Theme = props.eventType;

  return (
    <header className={Theme === 'Dark' ? 'Theme_Header' : null}>
      <figure className="Contain_Header">
        <img src={Logo} alt="Logo" />
        <button onClick={props.eventTheme} className={Theme === 'Dark' ? 'Sun' : null} >
          <img src={Theme === 'light' ? Moon : Sun} alt="Logo" className="Moon" />
        </button>
      </figure>
    </header>
  );
};

export default Head;
