import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import { IconCross, IconHamburger } from "../../ui/icons";
import logoImg from "@/assets/img/logo-sm.png";

export function HeaderBody() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id="nav" role="navigation">
      <Link to="/" className="logo">
        <img className="logo-img" alt="logo" src={logoImg} />
      </Link>

      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IconCross /> : <IconHamburger />}
      </button>

      <MainMenu isOpen={isMenuOpen} />
    </div>
  );
}

export function Header() {
  const isHomePage = useLocation().pathname === "/";
  if (isHomePage) {
    return null;
  }
  return <HeaderBody />;
}
