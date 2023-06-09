import style from './Buttons.module.scss';

const ButtonPrimary = ({ href, text, id = "" }) => {

    return (
        <a className={style.primary} href={href} {...(id && { id })}>
            {text}
        </a>
    );
}

const ButtonSecondary = ({ href, text, id = "", onClick }) => {
    return (
        <a className={style.secondary} href={href} {...(id && { id })} onClick={onClick} >
            {text}
        </a>
    );
}

const ButtonSubmit = ({ text, id = "" }) => {
    return (
        <button className={style.primary} type="submit" {...(id && { id })}>
            {text}
        </button>
    );
}

export { ButtonPrimary, ButtonSecondary, ButtonSubmit };