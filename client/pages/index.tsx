import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import PageTitle from "@/components/Utils/PageTitle";

export default function Home() {
    const [navItems, setNavItems] = useState([
        { title: "Carregando...", url: "#" },
    ]);

    useEffect(() => {
        setNavItems([
            { title: "Modelos", url: "#modelos" },
            { title: "Contatos", url: "#contatos" },
            { title: "Sobre", url: "/sobre" },
        ]);
    }, []);

    return (
        <>
            <PageTitle title="Ideal Canyon" />
            <Navbar {...navItems} />
        </>
    );
}
