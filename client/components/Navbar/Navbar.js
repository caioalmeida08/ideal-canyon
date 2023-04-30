import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoAndText from '../Utils/LogoAndText';
import HamburgerSVG from '../Utils/HamburgerSVG';
import PageTitle from '../Utils/PageTitle';
import NavLink from './NavLink';

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

    return (
        <>
            <PageTitle title={navbarData["title"]} />
            <nav className="navbar side-bleed">
                <a className="navbar-logo" href="/" alt="Logo da Ideal Canyon. Link para a página inicial.">
                    <LogoAndText />
                </a>

                <ul className="navbar-navigation">
                    {!loading &&
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
        </>
    );
};

export default Navbar;
