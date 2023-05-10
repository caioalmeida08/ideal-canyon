import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Home/Hero";
import PageTitle from "@/components/Utils/PageTitle";
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import { IconHeart, IconStar } from "@/components/Utils/Icons";
import {
    InputCheckbox,
    InputText,
    InputTextArea,
} from "@/components/Utils/Inputs";
import Footer from "@/components/Footer/Footer";
import Product from "@/components/Home/Product";

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
            <section
                className={`${style.reviews} grid-col-6 side-bleed section-margin-top text-center text-desktop-left`}
            >
                <img
                    alt="Vídeo com opiniões de clientes sobre a marca"
                    src={"img/review_video.jpg"}
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

            <Product />
            <section
                className={`${style.meet} section-dark section-margin-top grid-col-8-4`}
            >
                <img
                    src={"@/public/img/meet_the_team_image.jpg"}
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
                <form action="">
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
                    <ButtonPrimary url="/contato" text="Enviar mensagem" />
                </form>
            </section>
            <Footer />
        </>
    );
}
