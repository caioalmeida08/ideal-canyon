import { ButtonPrimary } from "@/components/Utils/Buttons";

import style from "./MeetTheTeam.module.scss"

const MeetTheTeam = () => {
    return (
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
                <ButtonPrimary href="/sobre" text="Conheça nossa equipe" />
            </div>
        </section>
    )
}

export default MeetTheTeam