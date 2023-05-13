import VelocimeterIcon from "@/assets/img/icons/icon_velocimeter.png";
import CheapIcon from "@/assets/img/icons/icon_cheap.png";
import ShieldIcon from "@/assets/img/icons/icon_shield.png";

import style from "./Benefits.module.scss"

const Benefits = () => {
    return (
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
    )
}

export default Benefits