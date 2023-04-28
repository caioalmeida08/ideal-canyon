import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../scss/navbar.scss';

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
        return <div>Loading...</div>;
    }

    return (
        <nav className="navbar">
            <a className="navbar-logo" href="/">
                <svg width="46" height="48" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Logo da Ideal Canyon">
                    <path d="M8.27355 47.9024L11.9237 17.7756L2.99615 23.2715L0 48L8.27355 47.9024Z" fill="black" />
                    <path d="M40.7987 0L18.6322 13.6461L14.4902 47.8288L45.8656 47.4595C45.8656 47.4595 27.4141 24.0442 40.0268 16.8254L40.7987 0Z" fill="black" />
                </svg>
                <p aria-hidden="true">Ideal Canyon</p>
            </a>

            <ul className="navbar-navigation">
                {
                    navbarData["navItems"].map((link, index) => (
                        <NavLink key={index} {...link} />
                    ), this)
                }
            </ul>

            <div className="navbar-hamburger" alt="Abrir menu lateral"></div>
        </nav>
    );
};

export default Navbar;
