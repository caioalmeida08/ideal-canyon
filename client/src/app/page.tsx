import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/Navbar/NavLink";
import Hero from "../components/Home/Hero";

import "../styles/reset.css";
import "../styles/utils.scss";

export default function Home() {
    return (
        <>
            <Navbar>
                <NavLink href="#products_section">Modelos</NavLink>
                <NavLink href="#doubts_form">Contato</NavLink>
                <NavLink href="#footer">Sobre</NavLink>
            </Navbar>
            <Hero />
        </>
    );
}
