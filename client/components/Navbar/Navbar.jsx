import LogoAndText from "../Utils/LogoAndText";
import HamburgerSVG from "../Utils/HamburgerSVG";
import NavLink from "./NavLink";

import style from "./Navbar.module.scss";

const Navbar = (props) => {
    return (
        <>
            <nav className={`${style.navbar} side-bleed`}>
                <a className={style.logo} href="/">
                    <LogoAndText />
                </a>
                <ul className={style.navigation}>
                    {Object.values(props).map((item) => {
                        return (
                            <NavLink
                                key={item.url}
                                url={item.url}
                                title={item.title}
                            />
                        );
                    })}
                    <NavLink url="/login" title="Login" />
                </ul>

                <div className={style.hamburger}>
                    <HamburgerSVG />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
