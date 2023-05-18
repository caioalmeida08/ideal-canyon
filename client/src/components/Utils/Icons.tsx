import { FunctionComponent } from "react";

const IconHeart = () => {
    return (
        <svg width="66" height="58" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.6267 0C42.9915 0 38.588 1.85442 35.3434 5.09965L32.5623 7.88127L30.0129 5.33145C23.2919 -1.62261 12.1674 -1.62262 5.44636 5.09965L5.2146 5.33145C-1.7382 12.2855 -1.7382 23.412 5.2146 30.3661L32.5623 57.9505L59.91 30.3661C66.8627 23.412 66.8627 12.2855 59.91 5.33145C56.6653 1.85442 52.2619 0 47.6267 0Z" fill="black" />
        </svg>
    );
};

const IconStar = () => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.74411 0.161438L6.81911 6.08966L0.28125 7.03483L5.01268 11.6514L3.89411 18.1647L9.74411 15.0913L15.5941 18.1647L14.4755 11.6514L19.207 7.04126L12.6691 6.08966L9.74411 0.161438Z" fill="#F08A00" />
        </svg>
    );
};

interface IconCloseProps {
    onClick: () => void;
}

const IconClose : FunctionComponent<IconCloseProps> = ({ onClick }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <rect x="0.542969" y="22.8994" width="32" height="4" rx="2" transform="rotate(-45 0.542969 22.8994)" fill="black" />
            <rect x="3.37109" y="0.272461" width="32" height="4" rx="2" transform="rotate(45 3.37109 0.272461)" fill="black" />
        </svg>

    );
};

enum Direction {
    NEXT,
    PREV
}

interface IconNextPrevProps {
    dir?: Direction;
}

const IconNextPrev: FunctionComponent<IconNextPrevProps> = ({dir = Direction.NEXT}) => {
    if (dir == Direction.NEXT) {
        return (
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" transform="matrix(-1 0 0 1 48 0)" fill="black" />
                <path d="M26 36.4941L24.308 34.8018L33.404 25.6921H9.2V23.2917H33.404L24.308 14.1821L26 12.4897L38 24.4919L26 36.4941Z" fill="white" />
            </svg>
        )
    }
    else {
        return (
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="black" />
                <path d="M22 36.4941L23.692 34.8018L14.596 25.6921H38.8V23.2917H14.596L23.692 14.1821L22 12.4897L10 24.4919L22 36.4941Z" fill="white" />
            </svg>
        )
    } 
}
export { IconHeart, IconStar, IconClose, IconNextPrev };