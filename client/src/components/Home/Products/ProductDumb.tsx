import Image from "next/image";
import IScooter from "@/lib/types/IScooter";
import { FunctionComponent, useRef } from "react";

import style from "./Product.module.scss"
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import { IconNextPrev } from "@/components/Utils/Icons";
import ScooterDetails from "./ScooterDetails";
import { handleSideImage, handleSwipeLeft, handleSwipeRight } from "./Product.handlers";
import { useSwipeable } from "react-swipeable";

interface ProductDumbProps {
    data: IScooter,
    setModelShort: any   
}

enum Direction {
    NEXT,
    PREV
}
 
const ProductDumb: FunctionComponent<ProductDumbProps> = ({data, setModelShort}) => {
    const mainImageElement = useRef<HTMLImageElement>();
    const sideImageElements: NodeListOf<Element> | undefined = document.querySelectorAll("[data-side-image]")
    const sliderElement: HTMLElement | undefined = document.querySelector("#image_slider")

    sideImageElements.forEach((sideImage)=>{
        sideImage.addEventListener("mouseenter", (e)=>{handleSideImage(e, mainImageElement)})
        sideImage.addEventListener("focus", (e)=>{handleSideImage(e, mainImageElement)})
    })

    const handleSlider = useSwipeable({
        onSwipedLeft: () => {
            handleSwipeLeft(data, sliderElement, mainImageElement)
        },
        onSwipedRight: () => {
            handleSwipeRight(data, sliderElement, mainImageElement)
        }
    })    

    return ( 
        <>
            <section
                className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
                id="products_section"
            >
                <div
                    className={`${style.product_images} max-width-500 max-width-desktop-unset`}
                    id="product_images"
                    data-model={data.scooter_model_short}
                    {...handleSlider}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${data.scooter_model_short}1.png`}
                        alt={`Imagem da ${data.scooter_model_short} em fundo transparente`}
                        className={`${style.main_image}`}
                        ref={mainImageElement}
                    />
                    <div className={style.left_images}>
                        {data.scooter_imgs.slice(0, 3).map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={`/api/img/scooters/${img}`}
                                    alt={`Imagem da ${data.scooter_model_short}`}
                                    tabIndex={0}
                                    data-side-image
                                />
                            );
                        })}
                    </div>
                    <div className={style.right_images}>
                        {data.scooter_imgs.slice(3, 6).map((img, index) => {
                            return (
                                <Image
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={`/api/img/scooters/${img}`}
                                    alt={`Imagem da ${data.scooter_model_short}`}
                                    tabIndex={0}
                                    data-side-image
                                />
                            );
                        })}
                    </div>
                    <div className={style.image_slider} id="image_slider">
                        {data.scooter_imgs.map((img, index) => {
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
                        {data.scooter_model}
                    </h2>
                    <div className={style.product_highlights}>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {data.scooter_max_speed}
                            </h3>
                            <span>km/h</span>
                            <p>velocidade máxima</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {data.scooter_battery_range}
                            </h3>
                            <span>quilômetros</span>
                            <p>autonomia</p>
                        </div>
                        <div className={style.product_highlight}>
                            <h3 className="text-bold text-h1">
                                {data.scooter_charging_time}
                            </h3>
                            <span>min</span>
                            <p>recarga completa</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${style.product_description} max-width-500 max-width-desktop-unset`}
                >
                    {data.scooter_description}
                </div>
                <div className={style.price_cta_wrapper}>
                    <div className={style.product_price}>
                        <h3>
                            {data.scooter_price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </h3>
                        <p>
                            até 24x de{" "}
                            {(data.scooter_price / 24).toLocaleString(
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
                        <ScooterDetails {...data} />
                        <ButtonPrimary href="/comprar" text="Comprar agora" />
                        <ButtonSecondary
                            href="#product_details"
                            text="Mais detalhes"
                            onClick={(e: Event) => {
                                e.preventDefault();
                                const modal = document.querySelector(
                                    `#${data.scooter_model_short}`
                                ) as HTMLDialogElement;

                                modal?.showModal();
                            }}
                        />
                        <ScooterDetails {...data} />
                    </div>
                </div>

                <div
                    className={style.other_product}
                    // onClick={handleOtherProducts}
                    // onKeyDown={handleOtherProducts}
                    data-model={data.other_scooter_models_short[0]}
                    tabIndex={0}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${data.other_scooter_models_short[0]}1.png`}
                        aria-hidden="true"
                        alt=""
                    />
                    <h2 className="text-capitalize">
                        {data.other_scooter_models[0]}
                    </h2>
                    <button
                        tabIndex={-1}
                        aria-label={`Ver informações da ${data.other_scooter_models[0]} Scooter`}
                    >
                    <IconNextPrev dir={Direction.NEXT}/>
                    </button>
                </div>
                <div
                    className={style.other_product}
                    // onClick={handleOtherProducts}
                    // onKeyDown={handleOtherProducts}
                    data-model={data.other_scooter_models_short[1]}
                    tabIndex={0}
                >
                    <Image
                        width={500}
                        height={500}
                        src={`/api/img/scooters/${data.other_scooter_models_short[1]}1.png`}
                        aria-hidden="true"
                        alt=""
                    />
                    <h2 className="text-capitalize">
                        {data.other_scooter_models[1]}
                    </h2>
                    <button
                        tabIndex={-1}
                        aria-label={`Ver informações da ${data.other_scooter_models[1]} Scooter`}
                    >
                        <IconNextPrev />
                    </button>
                </div>
            </section>
        </>
     );
}
 
export default ProductDumb;