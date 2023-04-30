const ButtonPrimary = ({ url, text }) => {
    return (
        <a className="button-primary" href={url}>
            {text}
        </a>
    );
}

const ButtonSecondary = ({ url, text }) => {
    return (
        <a className="button-secondary" href={url}>
            {text}
        </a>
    );
}

export { ButtonPrimary, ButtonSecondary };