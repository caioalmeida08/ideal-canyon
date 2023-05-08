import style from './Buttons.module.scss';

const ButtonPrimary = ({ url, text, id = "" }) => {

    return (
        <a className={style.primary} href={url} {...(id && { id })}>
            {text}
        </a>
    );
}

const ButtonSecondary = ({ url, text, id = "" }) => {
    return (
        <a className={style.secondary} href={url} {...(id && { id })}>
            {text}
        </a>
    );
}

export { ButtonPrimary, ButtonSecondary };