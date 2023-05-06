import style from "./Inputs.module.scss"

const InputText = ({ label, name, value, placeholder, width = "max" }) => {
    return (
        <>
            <div className={style.field} data-width={width}>
                <label className="text-demi" for={`input_${name}`}>{label}</label>
                <input className={style.text} type="text" id={`input_${name}`} name={name} value={value} placeholder={placeholder} />
            </div>
        </>
    )
}

const InputTextArea = ({ label, name, value, placeholder, width = "max" }) => {
    return (
        <>
            <div className={style.field} data-width={width}>
                <label className="text-demi" for={`input_${name}`}>{label}</label>
                <textarea className={style.text_area} type="text" id={`input_${name}`} name={name} value={value} placeholder={placeholder} rows="5" />
            </div>
        </>
    )
}

const InputCheckbox = ({ label, name, value, width = "max" }) => {
    return (
        <>
            <div className={style.field} data-width={width}>
                <p className="text-demi">Termos de uso</p>
                <div>
                    <input className={style.checkbox} type="checkbox" id={`input_${name}`} name={name} value={value} />
                    <label for={`input_${name}`}>{label}</label>
                </div>
            </div>
        </>
    )
}

export { InputText, InputTextArea, InputCheckbox }