import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "../Utils/Buttons";
import ScooterDetails from "./ScooterDetails";

import style from "./Product.module.scss";
import { IconNextPrev } from "../Utils/Icons";

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

type ProductProps = {
    scooterData: ScooterData;
    handleSideImage: (e: any) => void;
    handleSlider: any;
    handleOtherProducts: (e: any) => void;
};

enum Direction {
    NEXT,
    PREV
}

const ProductDumb = (props: ProductProps) => {
    const { scooterData, handleSideImage, handleSlider, handleOtherProducts } =
        { ...props };

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
                                    onFocus={handleSideImage}
                                    tabIndex={0}
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
                                    onFocus={handleSideImage}
                                    tabIndex={0}
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
                    onKeyDown={handleOtherProducts}
                    data-model={scooterData.allModelsShort[0]}
                    tabIndex={0}
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
                    <button
                        tabIndex={-1}
                        aria-label={`Ver informações da ${scooterData.allModels[0]} Scooter`}
                    >
                    <IconNextPrev dir={Direction.NEXT}/>
                    </button>
                </div>
                <div
                    className={style.other_product}
                    onClick={handleOtherProducts}
                    onKeyDown={handleOtherProducts}
                    data-model={scooterData.allModelsShort[1]}
                    tabIndex={0}
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
                    <button
                        tabIndex={-1}
                        aria-label={`Ver informações da ${scooterData.allModels[1]} Scooter`}
                    >
                        <IconNextPrev />
                    </button>
                </div>
            </section>
        </>
    );
};

export default ProductDumb;
