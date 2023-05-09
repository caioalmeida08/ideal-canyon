import CanyonEliteScooter1 from "@/assets/img/scooters/canyon_elite_scooter1.png";
import CanyonEliteScooter2 from "@/assets/img/scooters/canyon_elite_scooter2.jpg";
import CanyonEliteScooter3 from "@/assets/img/scooters/canyon_elite_scooter3.jpg";
import CanyonEliteScooter4 from "@/assets/img/scooters/canyon_elite_scooter4.jpg";
import CanyonComfortScooter1 from "@/assets/img/scooters/canyon_comfort_scooter1.png";
import CanyonMasterScooter1 from "@/assets/img/scooters/canyon_master_scooter1.png";
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import style from "./Product.module.scss";
import React, { useEffect, useState } from "react";

const Product = () => {
    const [modelShort, setModelShort] = useState('canyon-comfort-scooter');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let prev, current, next = null;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/scooter/details?modelShort=${modelShort}`);
            const data = await response.json();
            setData(...data);
            setIsLoading(false);
        };
        fetchData();
    }, [modelShort]);


    if (!isLoading) {

        current = data.allModelsShort.indexOf(data.scooter_model_short)
        prev = current - 1 < 0 ? data.allModelsShort.length - 1 : current - 1
        next = current + 1 > data.allModelsShort.length - 1 ? 0 : current + 1

        return (
            <>
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
                        <h2 className={`${style.product_name} text-h2 text-center text-capitalize`}>
                            {data.scooter_model}
                        </h2>
                        <div className={style.product_highlights}>
                            <div className={style.product_highlight}>
                                <h3 className="text-bold text-h1">{data.scooter_max_speed}</h3>
                                <span>km/h</span>
                                <p>velocidade máxima</p>
                            </div>
                            <div className={style.product_highlight}>
                                <h3 className="text-bold text-h1">{data.scooter_battery_range}</h3>
                                <span>quilômetros</span>
                                <p>autonomia</p>
                            </div>
                            <div className={style.product_highlight}>
                                <h3 className="text-bold text-h1">{data.scooter_charging_time}</h3>
                                <span>min</span>
                                <p>recarga completa</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.product_description}>
                        {data.scooter_description}
                    </div>
                    <div className={style.price_cta_wrapper}>
                        <div className={style.product_price}>
                            <h3>{data.scooter_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                            <p>até 24x de {(data.scooter_price / 24).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>

                        <div
                            className={style.product_cta}
                            data-scooterModel="canyon-elite-scooter"
                        >
                            <ButtonPrimary url="/comprar" text="Comprar agora" />
                            <ButtonSecondary
                                url="#modal-open"
                                text="Mais detalhes"
                                id="botao"
                            />
                        </div>
                    </div>

                    <div className={style.other_product} onClick={() => setModelShort(data.allModelsShort[prev])}>
                        <img src={CanyonComfortScooter1.src} aria-hidden="true" />
                        <h2 className="text-capitalize">{data.allModels[prev]}</h2>
                        <button
                            href=""
                            aria-label="Ver informações da Canyon Comfort Scooter"
                        ></button>
                    </div>
                    <div className={style.other_product} onClick={() => setModelShort(data.allModelsShort[next])}>
                        <img src={CanyonMasterScooter1.src} aria-hidden="true" />
                        <h2 className="text-capitalize">{data.allModels[next]}</h2>
                        <button
                            href=""
                            aria-label="Ver informações da Canyon Comfort Scooter"
                        ></button>
                    </div>
                </section>
            </>
        );
    }
}

export default React.memo(Product);