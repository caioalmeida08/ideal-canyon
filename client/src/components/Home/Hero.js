import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../Utils/Buttons';

import style from './Hero.module.scss';

const Hero = () => {
    return (
        <>
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
                        href="#products_section"
                        text="Encontre a sua scooter"
                    />
                </div>
                <div>
                    <img
                        className={`${style.img} max-width-500`}
                        src={`/api/img/hero_image.png`}
                        alt="Scooter do modelo Canyon Elite na cor branca"
                    />
                    <p className="text-demi text-center text-tablet-right">
                        +5.000 unidades vendidas | n° 1 nas pesquisas de mercado
                    </p>
                </div>
            </section>
        </>
    );
}

export default Hero;