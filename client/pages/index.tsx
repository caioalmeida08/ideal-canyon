import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary } from "@/components/Utils/Buttons";
import { IconHeart, IconStar } from "@/components/Utils/Icons";

import HeroImage from "@/assets/img/hero_image.png";
import ReviewVideo from "@/assets/img/review_video.jpg";
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
            <section
                className={`${style.hero} grid-col-2 side-bleed section-margin-top max-width-500 max-width-desktop-unset`}
            >
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
                        className={`${style.img} max-width-500`}
                        src={HeroImage.src}
                        alt="Scooter do modelo Canyon Elite na cor branca"
                    />
                    <p className="text-demi text-center text-desktop-right">
                        +5.000 unidades vendidas | n° 1 nas pesquisas de mercado
                    </p>
                </div>
            </section>
            <section
                className={`${style.reviews} grid-col-2 side-bleed section-margin-top text-center text-desktop-left`}
            >
                <img
                    alt="Vídeo com opiniões de clientes sobre a marca"
                    src={ReviewVideo.src}
                    className={`${style.video} max-width-500 max-width-desktop-unset`}
                />
                <div className={`${style.reviews_content} gap-h-32`}>
                    <h2 className="text-h2">
                        O que nossos clientes dizem sobre nós
                    </h2>
                    <div className={`${style.star_rating} grid-col-2`}>
                        <div className={style.title}>Qualidade do produto</div>
                        <div className="stars">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </div>
                    </div>
                    <div className={`${style.star_rating} grid-col-2`}>
                        <div className={style.title}>
                            Atendimento ao cliente
                        </div>
                        <div className="stars">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </div>
                    </div>
                    <div className={`${style.star_rating} grid-col-2`}>
                        <div className={style.title}>
                            Preço e valor do produto
                        </div>
                        <div className="stars">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </div>
                    </div>
                    <div className={`${style.star_rating} grid-col-2`}>
                        <div className={style.title}>Tempo de entrega</div>
                        <div className="stars">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </div>
                    </div>
                    <div className={`${style.heart_rating} gap-h-32`}>
                        <IconHeart />
                        <p className="text-demi">Recomendaria a marca</p>
                        <p className="text-main text-bold text-h2">95%</p>
                    </div>
                </div>
            </section>
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
        </>
    );
}
