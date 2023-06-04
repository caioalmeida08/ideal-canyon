import { MutableRefObject } from "react";

// Populates the images by the side of the main image
const handleSideImage = (e: any, ref: MutableRefObject<HTMLImageElement>) => {
    ref.current.setAttribute("src", e.target.src);
    ref.current.setAttribute("srcset", e.target.src);

};

export {handleSideImage}