import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Home/Hero";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary } from "@/components/Utils/Buttons";

import Review from "@/components/Home/Review";
import Product from "@/components/Home/Product";
import DoubtsForm from "@/components/Home/DoubtsForm";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Footer/Footer";

import VelocimeterIcon from "@/assets/img/icons/icon_velocimeter.png";
import CheapIcon from "@/assets/img/icons/icon_cheap.png";
import ShieldIcon from "@/assets/img/icons/icon_shield.png";

import style from "@/scss/pages/index.module.scss";

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
            <Hero />
            <Review />
            <section
                className={`${style.benefits} section-dark section-margin-top`}
            >
                <h2 className="text-main text-center text-h2">
                    Só nas nossas scooters você encontra
                </h2>
                <div>
                    <div
                        className={`${style.card} text-center text-light max-width-500`}
                    >
                        <img
                            className={style.card_icon}
                            src={VelocimeterIcon.src}
                            aria-hidden="true"
                        />
                        <h3 className="text-bold">Potência excepcional</h3>
                        <p className="line-height-15">
                            Nós projetamos nossas scooters com motores potentes,
                            que proporcionam uma condução suave e rápida.
                        </p>
                    </div>
                    <div
                        className={`${style.card} text-center text-light max-width-500`}
                    >
                        <img
                            className={style.card_icon}
                            src={CheapIcon.src}
                            aria-hidden="true"
                        />
                        <h3 className="text-bold">Preço acessível</h3>
                        <p className="line-height-15">
                            Trabalhamos para manter nossos preços competitivos
                            sem comprometer a qualidade do produto.
                        </p>
                    </div>
                    <div
                        className={`${style.card} text-center text-light max-width-500`}
                    >
                        <img
                            className={style.card_icon}
                            src={ShieldIcon.src}
                            aria-hidden="true"
                        />
                        <h3 className="text-bold">Durabilidade superior</h3>
                        <p className="line-height-15">
                            Nossas scooters são construídas com materiais de
                            alta qualidade e são resistentes ao desgaste diário.
                        </p>
                    </div>
                </div>
            </section>

            <Product />
            <section
                className={`${style.meet} section-dark section-margin-top grid-col-8-4`}
            >
                <img
                    src={"api/img/meet_the_team_image.jpg"}
                    alt="Pessoas da equipe Ideal Canyon com as mãos juntas ao centro da imagem"
                />
                <div className="gap-h-32">
                    <h2 className="text-light text-center text-desktop-left text-h2">
                        Conheça nossa história
                    </h2>
                    <p className="text-justify text-desktop-left text-light">
                        Nossa equipe é composta por profissionais dedicados que
                        trabalham duro para oferecer a você os melhores produtos
                        e serviços possíveis. Cada membro da nossa equipe possui
                        habilidades únicas aliadas a experiências valiosas que
                        nos ajudam a atender nossos clientes de forma eficaz.
                        Estamos comprometidos tem fornecer scooters duráveis ​​e
                        de alta qualidade, mantendo preços acessíveis, e nosso
                        time está sempre prontos para ajudá-lo a encontrar a
                        scooter perfeita para todas as suas necessidades.
                        Conheça nosso time agora e saiba mais sobre as pessoas
                        que fazem a Ideal Canyon acontecer.
                    </p>
                    <ButtonPrimary url="/sobre" text="Conheça nossa equipe" />
                </div>
            </section>
            <Faq />
            <DoubtsForm />
            <Footer />
        </>
    );
}
