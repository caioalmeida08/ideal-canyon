import style from './Buttons.module.scss';

const ButtonPrimary = ({ url, text }) => {

    return (
        <a className={style.primary} href={url}>
            {text}
        </a>
    );
}

const ButtonSecondary = ({ url, text }) => {
    return (
        <a className={style.secondary} href={url}>
            {text}
        </a>
    );
}

export { ButtonPrimary, ButtonSecondary };