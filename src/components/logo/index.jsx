import React from "react";
import { ReactComponent as LogoSvg } from '../../images/datosEnFugaLogo.svg';
import "./index.css";


const Logo = ({ color = "white" }) => <div>
  <LogoSvg fill={color} />
</div>

export default Logo;