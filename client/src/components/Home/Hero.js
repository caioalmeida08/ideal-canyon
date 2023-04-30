import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../Utils/Buttons';

const Hero = () => {
    return (
        <>
            <section className="hero grid-col-2 side-bleed">
                <div className='gap-h-32'>
                    <h1 className='text-h1 text-center text-desktop-left'>
                        Nós temos a <span className='text-main'>scooter perfeita</span> que você está procurando.
                    </h1>
                    <p className='text-p text-center text-desktop-left'>
                        Nossa coleção de modelos abrange todas as necessidades de uma pessoa moderna: praticidade, durabilidade e eficiência são o nosso foco.
                    </p>
                    <ButtonPrimary url='/produtos' text='Encontre a sua scooter' />
                </div>
                <div>
                    <img className='hero-img' src='' alt='Scooter do modelo Canyon Elite na cor branca' />
                </div>
            </section>
        </>
    );
}

export default Hero;