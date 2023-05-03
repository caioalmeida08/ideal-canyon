import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import { IconHeart, IconStar } from "@/components/Utils/Icons";

import HeroImage from "@/assets/img/hero_image.png";
import ReviewVideo from "@/assets/img/review_video.jpg";
import VelocimeterIcon from "@/assets/img/icons/icon_velocimeter.png";
import CheapIcon from "@/assets/img/icons/icon_cheap.png";
import ShieldIcon from "@/assets/img/icons/icon_shield.png";
import CanyonEliteScooter1 from "@/assets/img/scooters/canyon_elite_scooter1.png";
import CanyonEliteScooter2 from "@/assets/img/scooters/canyon_elite_scooter2.jpg";
import CanyonEliteScooter3 from "@/assets/img/scooters/canyon_elite_scooter3.jpg";
import CanyonEliteScooter4 from "@/assets/img/scooters/canyon_elite_scooter4.jpg";
import CanyonComfortScooter1 from "@/assets/img/scooters/canyon_comfort_scooter1.png";
import CanyonMasterScooter1 from "@/assets/img/scooters/canyon_master_scooter1.png";

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
            <section
                className={`${style.products} section-margin-top max-width-500 max-width-desktop-unset`}
            >
                <div className={style.product_images}>
                    <img
                        src={CanyonEliteScooter1.src}
                        alt="Imagem da Canyon Elite Scooter em fundo transparente"
                        className={style.main_image}
                    />
                    <div className={style.left_images}>
                        <img src={CanyonEliteScooter2.src} aria-hidden="true" />
                        <img src={CanyonEliteScooter3.src} aria-hidden="true" />
                        <img src={CanyonEliteScooter4.src} aria-hidden="true" />
                    </div>
                    <div className={style.right_images}>
                        <img src={CanyonEliteScooter4.src} aria-hidden="true" />
                        <img src={CanyonEliteScooter3.src} aria-hidden="true" />
                        <img src={CanyonEliteScooter2.src} aria-hidden="true" />
                    </div>
                    <div className={style.image_slider}>
                        <div className={style.slider}></div>
                        <div className={style.slider}></div>
                        <div className={style.slider} data-active="true"></div>
                        <div className={style.slider}></div>
                        <div className={style.slider}></div>
                    </div>
                </div>
                <div className={style.product_informations}>
                    <h2 className={`${style.product_name} text-h2 text-center`}>
                        Canyon Elite Scooter
                    </h2>
                    <div className={style.product_highlights}>
                        <div className={style.product_highlight}>
                            <h3>25</h3>
                            <span>km/h</span>
                            <p>velocidade máxima</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3>40</h3>
                            <span>km</span>
                            <p>autonomia</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3>6</h3>
                            <span>hr</span>
                            <p>recarga completa</p>
                        </div>
                    </div>
                </div>
                <div className={style.product_description}>
                    A Canyon Elite Scooter é uma opção excepcional para aqueles
                    que procuram uma scooter elétrica de alta qualidade. Com uma
                    velocidade máxima de 25km/h, esta scooter oferece uma
                    condução suave e rápida, permitindo que os usuários se movam
                    pela cidade com facilidade. Além disso, a bateria da Canyon
                    Elite oferece uma autonomia de até 40 km por carga, o que é
                    uma ótima opção para aqueles que precisam se deslocar por
                    longas distâncias. E com um tempo de recarga de apenas 6
                    horas, você pode rapidamente recarregar sua bateria e estar
                    pronto para outra jornada.
                </div>
                <div className={style.price_cta_wrapper}>
                    <div className={style.product_price}>
                        <h3>R$3.200,00</h3>
                        <p>até 24x de R$160,00</p>
                    </div>
                    <div className={style.product_cta}>
                        <ButtonPrimary url="/comprar" text="Comprar agora" />
                        <ButtonSecondary
                            url="#modal-open"
                            text="Mais detalhes"
                        />
                    </div>
                </div>
                <div className={style.other_product}>
                    <img src={CanyonComfortScooter1.src} aria-hidden="true" />
                    <h2>Canyon Comfort</h2>
                    <a
                        href=""
                        aria-label="Ver informações da Canyon Comfort Scooter"
                    ></a>
                </div>
                <div className={style.other_product}>
                    <img src={CanyonMasterScooter1.src} aria-hidden="true" />
                    <h2>Canyon Master</h2>
                    <a
                        href=""
                        aria-label="Ver informações da Canyon Comfort Scooter"
                    ></a>
                </div>
            </section>
        </>
    );
}
