import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import ScooterDetails from "./ScooterDetails";

import style from "./Product.module.scss";
import React, { useEffect, useState } from "react";

const Product = () => {
    const [modelShort, setModelShort] = useState('canyon-comfort-scooter');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [sliderIndex, setSliderIndex] = useState(1);

    let prev, current, next = null;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/scooter/details?modelShort=${modelShort}`);
            const data = await response.json();
            setData(...data);
            setIsLoading(false);
        };
        fetchData();
    }, [modelShort]);

    const handleSlider = (e) => {
        setSliderIndex(sliderIndex + 1 > 4 ? 1 : sliderIndex + 1)

        const mainImage = document.querySelector(`.${style.main_image}`);

        if (sliderIndex == 1) {
            mainImage.attributes.src.value = `/img/scooters/${data.scooter_model_short}${sliderIndex}.png`;
        } else {
            mainImage.attributes.src.value = `/img/scooters/${data.scooter_model_short}${sliderIndex}.jpg`;
        }

        const active = document.querySelector("#image_slider [data-active='true']");
        active.removeAttribute('data-active');

        const next = document.querySelector(`#image_slider [data-index='${sliderIndex}']`);
        next.setAttribute('data-active', 'true');

    }


    if (!isLoading) {

        current = data.allModelsShort.indexOf(data.scooter_model_short)
        prev = current - 1 < 0 ? data.allModelsShort.length - 1 : current - 1
        next = current + 1 > data.allModelsShort.length - 1 ? 0 : current + 1

        return (
            <>
                <section
                    className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
                >
                    <div className={`${style.product_images} max-width-500 max-width-desktop-unset`} onClick={(e) => { handleSlider(e) }}>
                        <img
                            src={`/img/scooters/${data.scooter_model_short}1.png`}
                            alt="Imagem da Canyon Elite Scooter em fundo transparente"
                            className={`${style.main_image}`}
                        />
                        <div className={style.left_images}>
                            <img src={`/img/scooters/${data.scooter_model_short}2.jpg`} aria-hidden="true" />
                            <img src={`/img/scooters/${data.scooter_model_short}3.jpg`} aria-hidden="true" />
                            <img src={`/img/scooters/${data.scooter_model_short}4.jpg`} aria-hidden="true" />
                        </div>
                        <div className={style.right_images}>
                            <img src={`/img/scooters/${data.scooter_model_short}3.jpg`} aria-hidden="true" />
                            <img src={`/img/scooters/${data.scooter_model_short}4.jpg`} aria-hidden="true" />
                            <img src={`/img/scooters/${data.scooter_model_short}2.jpg`} aria-hidden="true" />
                        </div>
                        <div className={style.image_slider} id="image_slider"
                            onClick={(e) => { handleSlider(e) }}
                        >
                            <div className={style.slider} data-index="4"></div>
                            <div className={style.slider} data-index="1" data-active="true"></div>
                            <div className={style.slider} data-index="2"></div>
                            <div className={style.slider} data-index="3"></div>
                        </div>
                    </div>
                    <div className={`${style.product_informations} max-width-500 max-width-desktop-unset`}>
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
                    <div className={`${style.product_description} max-width-500 max-width-desktop-unset`}>
                        {data.scooter_description}
                    </div>
                    <div className={style.price_cta_wrapper}>
                        <div className={style.product_price}>
                            <h3>{data.scooter_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                            <p>até 24x de {(data.scooter_price / 24).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>

                        <div
                            className={`${style.product_cta} max-width-500 max-width-desktop-unset`}
                        >
                            <ButtonPrimary url="/comprar" text="Comprar agora" />
                            <ButtonSecondary
                                url="#modal-open"
                                text="Mais detalhes"
                                onClick={() => document.querySelector(`dialog`).showModal()}
                            />
                            <ScooterDetails {...data} />
                        </div>
                    </div>

                    <div className={style.other_product} onClick={() => setModelShort(data.allModelsShort[prev])}>
                        <img src={`/img/scooters/${data.allModelsShort[prev]}1.png`} aria-hidden="true" />
                        <h2 className="text-capitalize">{data.allModels[prev]}</h2>
                        <button
                            href=""
                            aria-label="Ver informações da Canyon Comfort Scooter"
                        ></button>
                    </div>
                    <div className={style.other_product} onClick={() => setModelShort(data.allModelsShort[next])}>
                        <img src={`/img/scooters/${data.allModelsShort[next]}1.png`} aria-hidden="true" />
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