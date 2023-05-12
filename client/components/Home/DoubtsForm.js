import style from './DoubtsForm.module.scss';
import { ButtonPrimary } from "@/components/Utils/Buttons";
import {
    InputCheckbox,
    InputText,
    InputTextArea,
} from "@/components/Utils/Inputs";

import { useRouter } from 'next/router';

const handleInputChanges = (e) => {
    console.log(e)
}

const DoubtsForm = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

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
                        name="nome_completo"
                        value=""
                        placeholder="Digite seu nome completo"
                        required
                        pattern="[a-z]{8, 64}"
                        title="O nome deve conter entre 8 e 64 caracteres"
                        onChange={handleInputChanges}
                    />
                    <InputText
                        label="Assunto"
                        name="assunto"
                        value=""
                        placeholder="Ex: Dúvida sobre o método de envio"
                        required
                        pattern="[a-z0-9]{8, 64}"
                        title="O assunto deve conter entre 8 e 64 caracteres"
                        onChange={handleInputChanges}
                    />
                    <InputTextArea
                        label="Mensagem"
                        name="mensagem"
                        value=""
                        placeholder="Digite sua mensagem"
                        required
                        pattern="[a-z0-9]{8, 512}"
                        title="A mensagem deve conter entre 8 e 512 caracteres"
                        onChange={handleInputChanges}
                    />
                    <InputText
                        label="Email para contato"
                        name="email_contato"
                        value=""
                        placeholder="Ex: nomedeusuario@emai.com"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="O email deve ser válido"
                        onChange={handleInputChanges}
                    />
                    <InputCheckbox
                        label="Concordo com os termos de uso e política de privacidade"
                        name="termos"
                        required
                        onChange={handleInputChanges}
                    />
                    <ButtonPrimary url="/contato" text="Enviar mensagem" onClick={() => {
                        document.getElementById("doubts_form").submit();
                    }} />
                </form>
            </section>
        </>
    )
}

export default DoubtsForm;