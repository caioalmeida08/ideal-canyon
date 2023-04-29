import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/components/navbar.scss';
import LogoAndText from '../../assets/img/LogoAndText';
import HamburgerSVG from '../../assets/img/HamburgerSVG';

const NavLink = (link) => {
    return (
        <li>
            <a href={link.url}>{link.title}</a>
        </li>
    );
};

const Navbar = () => {
    const [navbarData, setNavbarData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => {
                setNavbarData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <nav className="navbar side-bleed">
            <a className="navbar-logo" href="/" alt="Logo da Ideal Canyon. Link para a página inicial.">
                <LogoAndText />
            </a>

            <ul className="navbar-navigation">
                {
                    navbarData["navItems"].map((link, index) => (
                        <NavLink key={index} {...link} />
                    ), this)
                }

                <NavLink url="/login" title="Login" />
            </ul>

            <div className="navbar-hamburger" alt="Abrir menu lateral">
                <HamburgerSVG />
            </div>
        </nav>
    );
};

export default Navbar;
