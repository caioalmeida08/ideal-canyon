import style from "./DoubtsForm.module.scss";
import { ButtonSubmit } from "../Utils/Buttons";
import {
    InputCheckbox,
    InputEmail,
    InputText,
    InputTextArea,
} from "../Utils/Inputs";

const handleSubmit = async (e: any) => {
    e.preventDefault();

    // turn form data into json
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // send form data to server
    try {
        const response = await fetch("/api/contato", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        });
        const data = await response.json();

        // throw error if response is not ok
        if (!response.ok) {
            throw new Error(data);
        }

        const errorDisplay = document.getElementById("error_display");
        errorDisplay.innerHTML = "Mensagem enviada com sucesso!";
        errorDisplay.style.color = "green";
        errorDisplay.style.display = "block";
    } catch (error) {
        // display error message
        const errorDisplay = document.getElementById("error_display");
        errorDisplay.innerHTML = error.message;
        errorDisplay.style.color = "#cc0000";
        errorDisplay.style.display = "block";
    }
};

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
        <form
          action="/contato"
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          id="doubts_form"
        >
          <InputText
            label="Nome completo"
            name="contact_name"
            placeholder="Digite seu nome completo"
            required
            pattern="[a-zA-Z\s]+"
            title="O nome deve conter apenas letras maiúsculas e minúsculas"
          />
          <InputText
            label="Assunto"
            name="contact_subject"
            placeholder="Ex: Dúvida sobre o método de envio"
            required
            pattern="[a-z0-9]{8, 64}"
            title="O assunto deve conter entre 8 e 64 caracteres"
          />
          <InputTextArea
            label="Mensagem"
            name="contact_message"
            placeholder="Digite sua mensagem"
            required
            pattern="[a-z0-9]{64, 512}"
            title="A mensagem deve conter entre 8 e 512 caracteres"
          />
          <InputEmail
            label="E-mail para contato"
            name="contact_email"
            placeholder="Ex: nomedeusuario@emai.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="O email deve ser válido. Ex: email@plataforma.com"
          />
          <InputCheckbox
            label="Concordo com os termos de uso e política de privacidade"
            name="contact_agrees_with_terms"
            required
          />
          <ButtonSubmit text="Enviar mensagem" />
          <span className={style.error_display} id="error_display"></span>
        </form>
      </section>
    </>
  );
};

export default DoubtsForm;
