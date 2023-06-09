import LogoAndText from "../Utils/LogoAndText";
import HamburgerSVG from "../Utils/HamburgerSVG";

import style from "./Navbar.module.scss";
import NavLink from "./NavLink";

const Navbar = (props) => {
    return (
        <>
            <nav className={`${style.navbar} side-bleed`}>
                <a className={style.logo} href="/">
                    <LogoAndText />
                </a>

                <ul className={style.navigation}>
                    {props.children}
                    <NavLink href="/login">Login</NavLink>
                </ul>

                <div className={style.hamburger}>
                    <HamburgerSVG />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
