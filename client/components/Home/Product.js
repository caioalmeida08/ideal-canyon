import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import ScooterDetails from "./ScooterDetails";

import style from "./Product.module.scss";
import React, { useEffect, useState } from "react";

const Product = () => {
    const [modelShort, setModelShort] = useState('canyon-comfort-scooter');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // controls the reset of the product slider when changing models
    const [lastModel, setLastModel] = useState(null);
    const [currentModel, setCurrentModel] = useState(null);

    let prev, current, next = null;

    // fetch the data for this model of scooter
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/scooter/details?modelShort=${modelShort}`);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        };
        fetchData();
    }, [modelShort]);

    // get images for the side display in products section
    const getSideImages = (side) => {
        let imgs = [];

        if (side == "left") {
            data.imgs.slice(0, 3).map((img, index) => {
                imgs.push(
                    <>
                        <img
                            key={index}
                            src={`api/img/scooters/${img}`}
                            aria-hidden="true"
                            data-index={index}
                            onMouseEnter={(e) => { handleSideImage(e) }}
                        />
                    </>
                )
            })
        } else {
            data.imgs.slice(3, 6).map((img, index) => {
                imgs.push(
                    <>
                        <img
                            key={index}
                            src={`api/img/scooters/${img}`}
                            aria-hidden="true"
                            onMouseEnter={(e) => { handleSideImage(e) }}
                        />
                    </>
                )
            })
        }

        return imgs

    }

    // populate the image slider of mobile version
    const getImgSlider = () => {
        if (!data.imgs) {
            return
        }

        return (
            data.imgs.map((img, index) => {
                if (index == 0) {
                    return (
                        <div className={style.slider} data-active="true" data-index={index}></div>
                    )
                }

                return (
                    <div className={style.slider} data-index={index}></div>
                )
            })
        )
    }

    const handleSideImage = (e) => {
        const src = e.target.getAttribute("src")
        const mainImageElement = document.querySelector(`.${style.main_image}`)
        mainImageElement.setAttribute("src", src)

    }

    // handle the image slider of mobile version
    const handleSlider = (e) => {
        // get coordinates of the click
        let x = e.changedTouches[0].clientX

        // check if the click was on the right or the left side of the element
        let width = e.target.offsetWidth

        // get the index of the current image being displayed
        try {
            var currentIndex = document.querySelector(`#image_slider [data-active="true"]`).getAttribute("data-index");
            currentIndex = parseInt(currentIndex)
        } catch (error) {
            var currentIndex = 0
        }

        // stores the index of the next image to be displayed
        let nextIndex = null

        // checks if the slider should go forwards or backwards
        if (x >= width / 2) {
            nextIndex = currentIndex + 1 > data.imgs.length - 1 ? 0 : currentIndex + 1
        } else {
            nextIndex = currentIndex - 1 < 0 ? data.imgs.length - 1 : currentIndex - 1
        }

        const mainImageElement = document.querySelector(`.${style.main_image}`)
        mainImageElement.setAttribute("src", `api/img/scooters/${data.imgs[nextIndex]}`)

        const sliderElement = document.getElementById("image_slider")

        sliderElement.childNodes.forEach((element) => {
            element.setAttribute("data-active", "false");
        })

        sliderElement.children[nextIndex].setAttribute("data-active", "true");
    }

    // resets the image slider to the first image when changing models
    const resetSliderCounter = () => {
        const nextIndex = 0;

        const mainImageElement = document.querySelector(`.${style.main_image}`)
        mainImageElement.setAttribute("src", `api/img/scooters/${data.imgs[nextIndex]}`)

        const sliderElement = document.getElementById("image_slider")

        sliderElement.childNodes.forEach((element) => {
            element.setAttribute("data-active", "false");
        })

        sliderElement.children[nextIndex].setAttribute("data-active", "true");
    }

    if (!isLoading) {

        // controls the change of the model of scooter
        current = data.allModelsShort.indexOf(data.scooter_model_short)
        prev = current - 1 < 0 ? data.allModelsShort.length - 1 : current - 1
        next = current + 1 > data.allModelsShort.length - 1 ? 0 : current + 1

        return (
            <>
                <section
                    className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
                >
                    <div className={`${style.product_images} max-width-500 max-width-desktop-unset`} id="product_images" data-model={data.scooter_model_short} onTouchEnd={(e) => { handleSlider(e) }}>
                        <img
                            src={`api/img/scooters/${data.scooter_model_short}1.png`}
                            alt={`Imagem da ${data.scooter_model_short} em fundo transparente`}
                            className={`${style.main_image}`}
                        />
                        <div className={style.left_images}>
                            {getSideImages("left")}
                        </div>
                        <div className={style.right_images}>
                            {getSideImages("right")}
                        </div>
                        <div className={style.image_slider} id="image_slider">
                            {getImgSlider()}
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

                    <div className={style.other_product} onClick={() => { setModelShort(data.allModelsShort[prev]); resetSliderCounter() }}>
                        <img src={`api/img/scooters/${data.allModelsShort[prev]}1.png`} aria-hidden="true" />
                        <h2 className="text-capitalize">{data.allModels[prev]}</h2>
                        <button
                            href=""
                            aria-label="Ver informações da Canyon Comfort Scooter"
                        ></button>
                    </div>
                    <div className={style.other_product} onClick={() => { setModelShort(data.allModelsShort[next]); resetSliderCounter() }}>
                        <img src={`api/img/scooters/${data.allModelsShort[next]}1.png`} aria-hidden="true" />
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