import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary } from "@/components/Utils/Buttons";
import HeroImage from "@/assets/img/hero_image.png";

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
            <section className="hero grid-col-2 side-bleed section-margin-top max-width-500 max-width-desktop-unset">
                <div className="gap-h-32">
                    <h1 className="text-h1 text-center text-desktop-left">
                        Nós temos a <span className="text-main">scooter</span>{" "}
                        que você{" "}
                        <span className="text-main">está procurando.</span>
                    </h1>
                    <p className="text-p text-center text-desktop-left">
                        Nossa coleção de modelos abrange todas as necessidades
                        de uma pessoa moderna: praticidade, durabilidade e
                        eficiência são o nosso foco.
                    </p>
                    <ButtonPrimary
                        url="/produtos"
                        text="Encontre a sua scooter"
                    />
                </div>
                <div>
                    <img
                        className="hero-img max-width-500"
                        src={HeroImage.src}
                        alt="Scooter do modelo Canyon Elite na cor branca"
                    />
                    <p className="text-demi text-center text-desktop-right">
                        +5.000 unidades vendidas | n° 1 nas pesquisas de mercado
                    </p>
                </div>
            </section>
        </>
    );
}
