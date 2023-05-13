import style from './DoubtsForm.module.scss';
import { ButtonSubmit } from "@/components/Utils/Buttons";
import {
    InputCheckbox,
    InputText,
    InputTextArea,
} from "@/components/Utils/Inputs";

import { useRouter } from 'next/router';

const handleInputChanges = (e) => {
    console.log(e)
}

const handleSubmit = async (e) => {
    e.preventDefault();

    // turn form data into json
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // send form data to server
    try {
        const response = await fetch('/api/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        })
        const data = await response.json()

        // throw error if response is not ok
        if (!response.ok) {
            throw new Error(data)
        }
    } catch (error) {
        console.log(error)
    }

}

const DoubtsForm = () => {

    return (
        <>
            <section
                className={`${style.doubts_form} section-margin-top side-bleed max-width-tablet-800 gap-h-32`}
            >
                <h2 className="text-h2 text-main text-center ">
                    Restou alguma dúvida?
                    <br />
                    Entre em contato
                </h2>
                <form action="/contato" method="POST" onSubmit={(e) => { handleSubmit(e) }} id="doubts_form">
                    <InputText
                        label="Nome completo"
                        name="contact_name"
                        value=""
                        placeholder="Digite seu nome completo"
                        required
                        pattern="[a-zA-Z]+"
                        title="O nome deve conter apenas letras maiúsculas e minúsculas"
                        onChange={handleInputChanges}
                    />
                    <InputText
                        label="Assunto"
                        name="contact_subject"
                        value=""
                        placeholder="Ex: Dúvida sobre o método de envio"
                        required
                        pattern="[a-z0-9]{8, 64}"
                        title="O assunto deve conter entre 8 e 64 caracteres"
                        onChange={handleInputChanges}
                    />
                    <InputTextArea
                        label="Mensagem"
                        name="contact_message"
                        value=""
                        placeholder="Digite sua mensagem"
                        required
                        pattern="[a-z0-9]{8, 512}"
                        title="A mensagem deve conter entre 8 e 512 caracteres"
                        onChange={handleInputChanges}
                    />
                    <InputText
                        label="Email para contato"
                        name="contact_email"
                        value=""
                        placeholder="Ex: nomedeusuario@emai.com"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="O email deve ser válido. Ex: email@plataforma.com"
                        onChange={handleInputChanges}
                    />
                    <InputCheckbox
                        label="Concordo com os termos de uso e política de privacidade"
                        name="termos"
                        required
                        onChange={handleInputChanges}
                    />
                    <ButtonSubmit text="Enviar mensagem" />
                </form>
            </section>
        </>
    )
}

export default DoubtsForm;