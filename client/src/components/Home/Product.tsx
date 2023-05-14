import { useQuery } from "@tanstack/react-query";
import { FC, MouseEventHandler, useState } from "react";
import axios from "axios";
import { useSwipeable } from "react-swipeable";

import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "../Utils/Buttons";
import ScooterDetails from "./ScooterDetails";

import style from "./Product.module.scss";

type ProductProps = {
    modelShortProp: string;
};

type ScooterData = {
    scooter_model: string;
    scooter_model_short: string;
    scooter_max_speed: number;
    scooter_battery_range: number;
    scooter_charging_time: number;
    scooter_description: string;
    scooter_price: number;
    allModels: string[];
    allModelsShort: string[];
    imgs: string[];
};

const Product: FC<ProductProps> = ({ modelShortProp }: ProductProps) => {
    const [modelShort, setModelShort]: [string, any] = useState(modelShortProp);

    const handleSideImage = (e: any) => {
        const src = e.target.getAttribute("src");
        const mainImageElement = document.querySelector(`.${style.main_image}`);
        mainImageElement?.setAttribute("src", src);
        mainImageElement?.setAttribute("srcset", src);
    };

    const handleSlider = useSwipeable({
        onSwipedLeft: () => {
            // Only run if slider is shown
            // Parse slider responsivity to css only
            const slider = document.getElementById("image_slider");
            const sliderComputedStyle = getComputedStyle(
                slider as Element
            ).display;

            const sliderIsShown = sliderComputedStyle != "none";

            if (sliderIsShown) {
                // Get active slider
                const activeSlider = document.querySelector(
                    `.${style.slider}[data-active=true]`
                ) as HTMLElement;

                // Get active slider index
                const activeSliderIndex = parseInt(
                    activeSlider.dataset.index as string
                );

                //  Get next slider index
                let nextSliderIndex = activeSliderIndex + 1;

                // Check if next slider is within bounds and set it accordingly
                if (nextSliderIndex > scooterData.imgs.length - 1) {
                    nextSliderIndex = 0;
                }

                // Get next slider element
                const nextSlider = document.querySelector(
                    `.${style.slider}[data-index="${nextSliderIndex}"]`
                ) as HTMLElement;

                // Set active slider to false
                activeSlider.dataset.active = "false";

                // Set next slider to true
                nextSlider.dataset.active = "true";

                // Get the main image element
                const mainImage = document.querySelector(
                    `.${style.main_image}`
                );

                // Change the src of the main image to the one corresponding to the nextSliderIndex
                mainImage?.setAttribute(
                    "src",
                    `/api/img/scooters/${scooterData.imgs[nextSliderIndex]}`
                );

                mainImage?.setAttribute(
                    "srcset",
                    `/api/img/scooters/${scooterData.imgs[nextSliderIndex]}`
                );
            }
        },
        onSwipedRight: () => {
            // Only run if slider is shown
            // Parse slider responsivity to css only
            const slider = document.getElementById("image_slider");
            const sliderComputedStyle = getComputedStyle(
                slider as Element
            ).display;

            const sliderIsShown = sliderComputedStyle != "none";

            if (sliderIsShown) {
                // Get active slider
                const activeSlider = document.querySelector(
                    `.${style.slider}[data-active=true]`
                ) as HTMLElement;

                // Get active slider index
                const activeSliderIndex = parseInt(
                    activeSlider.dataset.index as string
                );

                //  Get prev slider index
                let prevSliderIndex = activeSliderIndex - 1;

                // Check if prev slider is within bounds and set it accordingly
                if (prevSliderIndex < 0) {
                    prevSliderIndex = scooterData.imgs.length - 1;
                }

                // Get prev slider element
                const prevSlider = document.querySelector(
                    `.${style.slider}[data-index="${prevSliderIndex}"]`
                ) as HTMLElement;

                // Set active slider to false
                activeSlider.dataset.active = "false";

                // Set prev slider to true
                prevSlider.dataset.active = "true";

                // Get the main image element
                const mainImage = document.querySelector(
                    `.${style.main_image}`
                );

                // Change the src of the main image to the one corresponding to the prevSliderIndex
                mainImage?.setAttribute(
                    "src",
                    `/api/img/scooters/${scooterData.imgs[prevSliderIndex]}`
                );

                mainImage?.setAttribute(
                    "srcset",
                    `/api/img/scooters/${scooterData.imgs[prevSliderIndex]}`
                );
            }
        },
    });

    const handleOtherProducts = (e: any) => {
        const model =
            e.target.dataset.model || e.target.parentElement.dataset.model;

        setModelShort(model);

        // reset the slider children dataset
        const sliderChildren = document.querySelectorAll(
            `.${style.slider}`
        ) as NodeListOf<HTMLElement>;

        sliderChildren.forEach((child) => {
            child.setAttribute("data-active", "false");
        });

        // Set the first slider to active
        sliderChildren[0].setAttribute("data-active", "true");
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: [modelShort],
        queryFn: async () => {
            const data = await axios.get(
                `/api/scooter/details?modelShort=${modelShort}`
            );
            return data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        console.log(error);
        return <div>Error </div>;
    }

    let scooterData = data.data as ScooterData;

    return (
        <>
            <section
                className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
                id="products_section"
            >
                <div
                    className={`${style.product_images} max-width-500 max-width-desktop-unset`}
                    id="product_images"
                    data-model={scooterData.scooter_model_short}
                    {...handleSlider}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${scooterData.scooter_model_short}1.png`}
                        alt={`Imagem da ${scooterData.scooter_model_short} em fundo transparente`}
                        className={`${style.main_image}`}
                    />
                    <div className={style.left_images}>
                        {scooterData.imgs.slice(0, 3).map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={`/api/img/scooters/${img}`}
                                    alt={`Imagem da ${scooterData.scooter_model_short}`}
                                    onMouseEnter={handleSideImage}
                                />
                            );
                        })}
                    </div>
                    <div className={style.right_images}>
                        {scooterData.imgs.slice(3, 6).map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={`/api/img/scooters/${img}`}
                                    alt={`Imagem da ${scooterData.scooter_model_short}`}
                                    onMouseEnter={handleSideImage}
                                />
                            );
                        })}
                    </div>
                    <div className={style.image_slider} id="image_slider">
                        {scooterData.imgs.map((img, index) => {
                            if (index == 0) {
                                return (
                                    <div
                                        key={index}
                                        className={style.slider}
                                        data-active="true"
                                        data-index={index}
                                    ></div>
                                );
                            }

                            return (
                                <div
                                    key={index}
                                    className={style.slider}
                                    data-index={index}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className={`${style.product_informations} max-width-500 max-width-desktop-unset`}
                >
                    <h2
                        className={`${style.product_name} text-h2 text-center text-capitalize`}
                    >
                        {scooterData.scooter_model}
                    </h2>
                    <div className={style.product_highlights}>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {scooterData.scooter_max_speed}
                            </h3>
                            <span>km/h</span>
                            <p>velocidade máxima</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {scooterData.scooter_battery_range}
                            </h3>
                            <span>quilômetros</span>
                            <p>autonomia</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {scooterData.scooter_charging_time}
                            </h3>
                            <span>min</span>
                            <p>recarga completa</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${style.product_description} max-width-500 max-width-desktop-unset`}
                >
                    {scooterData.scooter_description}
                </div>
                <div className={style.price_cta_wrapper}>
                    <div className={style.product_price}>
                        <h3>
                            {scooterData.scooter_price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </h3>
                        <p>
                            até 24x de{" "}
                            {(scooterData.scooter_price / 24).toLocaleString(
                                "pt-BR",
                                {
                                    style: "currency",
                                    currency: "BRL",
                                }
                            )}
                        </p>
                    </div>

                    <div
                        className={`${style.product_cta} max-width-500 max-width-desktop-unset`}
                    >
                        <ScooterDetails {...scooterData} />
                        <ButtonPrimary href="/comprar" text="Comprar agora" />
                        <ButtonSecondary
                            href="#product_details"
                            text="Mais detalhes"
                            onClick={(e: Event) => {
                                e.preventDefault();
                                const modal = document.querySelector(
                                    `#${scooterData.scooter_model_short}`
                                ) as HTMLDialogElement;

                                modal?.showModal();
                            }}
                        />
                        <ScooterDetails {...scooterData} />
                    </div>
                </div>

                <div
                    className={style.other_product}
                    onClick={handleOtherProducts}
                    data-model={scooterData.allModelsShort[0]}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${scooterData.allModelsShort[0]}1.png`}
                        aria-hidden="true"
                        alt=""
                    />
                    <h2 className="text-capitalize">
                        {scooterData.allModels[0]}
                    </h2>
                    <button aria-label="Ver informações da Canyon Comfort Scooter"></button>
                </div>
                <div
                    className={style.other_product}
                    onClick={handleOtherProducts}
                    data-model={scooterData.allModelsShort[1]}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${scooterData.allModelsShort[1]}1.png`}
                        aria-hidden="true"
                        alt=""
                    />
                    <h2 className="text-capitalize">
                        {scooterData.allModels[1]}
                    </h2>
                    <button aria-label="Ver informações da Canyon Comfort Scooter"></button>
                </div>
            </section>
        </>
    );
};

export default Product;
