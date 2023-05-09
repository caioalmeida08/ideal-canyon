import style from './Buttons.module.scss';

const ButtonPrimary = ({ url, text, id = "" }) => {

    return (
        <a className={style.primary} href={url} {...(id && { id })}>
            {text}
        </a>
    );
}

const ButtonSecondary = ({ url, text, id = "", onClick }) => {
    return (
        <a className={style.secondary} href={url} {...(id && { id })} onClick={onClick} >
            {text}
        </a>
    );
}

export { ButtonPrimary, ButtonSecondary };