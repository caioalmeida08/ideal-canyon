import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import { IconHeart, IconStar } from "@/components/Utils/Icons";
import {
    InputCheckbox,
    InputText,
    InputTextArea,
} from "@/components/Utils/Inputs";

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
import MeetTheTeam from "@/assets/img/meet_the_team_image.jpg";

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
                className={`${style.hero} grid-col-6 side-bleed section-margin-top max-width-tablet-800 max-width-desktop-unset`}
            >
                <div className="gap-h-32">
                    <h1 className="text-h1 text-center text-tablet-left">
                        Nós temos a <span className="text-main">scooter</span>{" "}
                        que você{" "}
                        <span className="text-main">está procurando.</span>
                    </h1>
                    <p className="text-p text-center text-tablet-left">
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
                    <p className="text-demi text-center text-tablet-right">
                        +5.000 unidades vendidas | n° 1 nas pesquisas de mercado
                    </p>
                </div>
            </section>
            <section
                className={`${style.reviews} grid-col-6 side-bleed section-margin-top text-center text-desktop-left`}
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
                    <div className={`${style.star_rating} grid-col-6`}>
                        <div className={style.title}>Qualidade do produto</div>
                        <div className="stars">
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </div>
                    </div>
                    <div className={`${style.star_rating} grid-col-6`}>
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
                    <div className={`${style.star_rating} grid-col-6`}>
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
                    <div className={`${style.star_rating} grid-col-6`}>
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
                className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
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
                            <h3 className="text-bold text-h1">25</h3>
                            <span>km/h</span>
                            <p>velocidade máxima</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">40</h3>
                            <span>km</span>
                            <p>autonomia</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">6</h3>
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
            <section
                className={`${style.meet} section-dark section-margin-top grid-col-8-4`}
            >
                <img
                    src={MeetTheTeam.src}
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
            <section className="side-bleed section-margin-top gap-h-32">
                <h2 className="text-h2 text-center text-main">
                    Dúvidas frequentes
                </h2>
                <div className={`${style.faq} grid-col-8-4`}>
                    <ul className="gap-h-32">
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                Qual é o prazo de entrega para os scooters da
                                Ideal Canyon?
                            </h3>
                            <p>
                                O prazo de entrega para nossas scooters pode
                                variar dependendo da sua localização e da
                                disponibilidade de estoque. Geralmente, leva-se
                                em torno de 7 a 15 dias.
                            </p>
                        </li>
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                A Ideal Canyon oferece garantia em seus
                                produtos?
                            </h3>
                            <p>
                                Sim, oferecemos garantia em todos os nossos
                                produtos. A duração da garantia varia de acordo
                                com o modelo do scooter, mas garantimos que
                                todos os produtos da Ideal Canyon são fabricados
                                com materiais de alta qualidade e construídos
                                para durar.
                            </p>
                        </li>
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                As scooters da Ideal Canyon são fáceis de
                                montar?
                            </h3>
                            <p>
                                Sim! Nossas scooters são projetadas para serem
                                fáceis de montar. Incluímos instruções
                                detalhadas para ajudá-lo a montar seu scooter
                                rapidamente e sem complicações. Caso tenha
                                alguma dúvida, nossa equipe de suporte está
                                sempre disponível para ajudá-lo.
                            </p>
                        </li>
                    </ul>
                    <ul className="gap-h-32">
                        <li className="text-demi">
                            <h3>
                                Posso devolver meu scooter se não estiver
                                satisfeito?
                            </h3>
                        </li>
                        <li className="text-demi">
                            <h3>
                                Como faço para manter meu scooter da Ideal
                                Canyon?
                            </h3>
                        </li>
                        <li className="text-demi">
                            <h3>
                                Qual é a diferença entre os modelos de scooters
                                da Ideal Canyon?
                            </h3>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className={`${style.doubts_form} section-margin-top side-bleed max-width-tablet-800 gap-h-32`}
            >
                <h2 className="text-h2 text-main text-center ">
                    Restou alguma dúvida?
                    <br />
                    Entre em contato
                </h2>
                <form action="" className="gap-h-32">
                    <InputText
                        label="Nome completo"
                        name="nome_completo"
                        value=""
                        placeholder="Digite seu nome completo"
                    />
                    <InputText
                        label="Assunto"
                        name="assunto"
                        value=""
                        placeholder="Ex: Dúvida sobre o método de envio"
                    />
                    <InputTextArea
                        label="Mensagem"
                        name="mensagem"
                        value=""
                        placeholder="Digite sua mensagem"
                    />
                    <InputText
                        label="Email para contato"
                        name="email_contato"
                        value=""
                        placeholder="Ex: nomedeusuario@emai.com"
                    />
                    <InputCheckbox
                        label="Concordo com os termos de uso e política de privacidade"
                        name="termos"
                        value=""
                    />
                </form>
            </section>
        </>
    );
}
