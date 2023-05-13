import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/Navbar/NavLink";

import "../styles/reset.css";
import "../styles/utils.scss";

export default function Home() {
    return (
        <main>
            <Navbar>
                <NavLink href="#products_section">Modelos</NavLink>
                <NavLink href="#doubts_form">Contato</NavLink>
                <NavLink href="#footer">Sobre</NavLink>
            </Navbar>
        </main>
    );
}
