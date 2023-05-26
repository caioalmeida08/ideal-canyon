import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import axios from "axios";
import { useSwipeable } from "react-swipeable";

import ProductDumb from "./ProductDumb";

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

    // Populates the images by the side of the main image
    const handleSideImage = (e: any) => {
        const src = e.target.getAttribute("src");
        const mainImageElement = document.querySelector(`.${style.main_image}`);
        mainImageElement?.setAttribute("src", src);
        mainImageElement?.setAttribute("srcset", src);
    };

    // Controls the image slider on mobile
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

    // Controls the change of scooter model
    const handleOtherProducts = (e: any) => {
        // Check if the event was not triggered by unwanted keypress
        if (e.type == "keydown") {
            if (e.key != "Enter" && e.key != " ") {
                return;
            }
        }

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

    // Fetch the data from the server
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [modelShort],
        queryFn: async () => {
            const data = await axios.get(
                `/api/scooter/${modelShort}`
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
        <ProductDumb
            scooterData={scooterData}
            handleSideImage={handleSideImage}
            handleSlider={handleSlider}
            handleOtherProducts={handleOtherProducts}
        ></ProductDumb>
    );
};

export default Product;
