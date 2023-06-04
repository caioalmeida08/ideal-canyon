import { MutableRefObject } from "react";

import style from "./Product.module.scss"
import IScooter from "@/lib/types/IScooter";

// Populates the images by the side of the main image
const handleSideImage = (e: any, ref: MutableRefObject<HTMLImageElement>) => {
    ref.current.setAttribute("src", e.target.src);
    ref.current.setAttribute("srcset", e.target.src);

};

const handleSwipeLeft = (data: IScooter, sliderElement: HTMLElement, mainImage: MutableRefObject<HTMLImageElement>) => {
    // Return if parameters are incorrect
    if (!data || !sliderElement || !mainImage) {
        console.warn("slider wont run because one of the important parameters is not correct");
        return
    }
    
    // Only run if slider is shown
    // Parse slider responsivity to css only
    const sliderComputedStyle = getComputedStyle(sliderElement).display;

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
        if (nextSliderIndex > data.scooter_imgs.length - 1) {
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

        // Change the src of the main image to the one corresponding to the nextSliderIndex
        mainImage.current.setAttribute(
            "src",
            `/api/img/scooters/${data.scooter_imgs[nextSliderIndex]}`
        );

        mainImage.current.setAttribute(
            "srcset",
            `/api/img/scooters/${data.scooter_imgs[nextSliderIndex]}`
        );
    }
};

const handleSwipeRight = (data: IScooter, sliderElement: HTMLElement, mainImage: MutableRefObject<HTMLImageElement>) => {
    // Return if parameters are incorrect
    if (!data || !sliderElement || !mainImage) {
        console.warn("slider wont run because one of the important parameters is not correct");
        return
    }

    // Only run if slider is shown
    // Parse slider responsivity to css only
    const sliderComputedStyle = getComputedStyle(sliderElement).display;

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
            prevSliderIndex = data.scooter_imgs.length - 1;
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
            `/api/img/scooters/${data.scooter_imgs[prevSliderIndex]}`
        );

        mainImage?.setAttribute(
            "srcset",
            `/api/img/scooters/${data.scooter_imgs[prevSliderIndex]}`
        );
    }
}

export {handleSideImage, handleSwipeLeft, handleSwipeRight}