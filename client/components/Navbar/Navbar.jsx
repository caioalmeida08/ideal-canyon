import LogoAndText from "../Utils/LogoAndText";
import HamburgerSVG from "../Utils/HamburgerSVG";
import NavLink from "./NavLink";

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar side-bleed">
                <a className="navbar-logo" href="/">
                    <LogoAndText />
                </a>
                <ul className="navbar-navigation">
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

                <div className="navbar-hamburger">
                    <HamburgerSVG />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
