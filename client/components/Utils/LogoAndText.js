import LogoSVG from "./LogoSVG";

import style from "./LogoAndText.module.scss";

const LogoAndText = () => {
    return (
        <div className={style.logo_and_text}>
            <LogoSVG />
            <p className="text-h2 text-dark">Ideal Canyon</p>
        </div>
    );
};

export default LogoAndText;