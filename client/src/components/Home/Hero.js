import React from 'react';
import { ButtonPrimary } from '../Utils/Buttons';

const Hero = () => {
    return (
        <>
            <section className="hero grid-col-2 side-bleed">
                <div className='gap-h-32'>
                    <h1 className='text-h1 text-center text-desktop-left'>
                        A scooter que se <span className='text-main'>encaixa na sua vida</span> está aqui!
                    </h1>
                    <p className='text-p text-center text-desktop-left'>
                        Nossa coleção de modelos abrange todas as necessidades de uma pessoa moderna: praticidade, durabilidade e eficiência são o nosso foco.
                    </p>
                </div>
                <div>
                    <ButtonPrimary url='/produtos' text='Ver Produtos' />
                </div>
            </section>
        </>
    );
}

export default Hero;