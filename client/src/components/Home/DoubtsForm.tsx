import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import style from "./DoubtsForm.module.scss";
import { ButtonSubmit } from "../Utils/Buttons";
import {
  InputCheckbox,
  InputEmail,
  InputText,
  InputTextArea,
} from "../Utils/Inputs";
import { useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import handleReactQueryError from "@/lib/errors/handleReactQueryError";

const DoubtsForm = () => {
  // stores the data of the doubts form
  const [formDataObj, setFormDataObj] = useState(null);
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);

  // send form to back-end
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [formDataObj],
    queryFn: async () => {
      try {
        const data = await axios.post(`/api/contact`, formDataObj, {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus(status) {
            return status == 201;
          },
        });
        return data;
      } catch (error: any) {
        handleReactQueryError(error);
      }
    },
    enabled: isQueryEnabled,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formElements: HTMLInputElement[] = Array.from(form.elements);
    let formData: Object | HTMLSpanElement = {};

    // parse form data to object
    formElements.map((input) => {
      // filter out the submit button
      if (input.name) {
        formData[input.name] = input.value;
      }
    });

    setFormDataObj(formData);
    setIsQueryEnabled(true);
  };

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
        <form method="POST" onSubmit={handleSubmit} id="doubts_form">
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
          {isQueryEnabled && (
            <span id="error_display" className={style.error_display}>
              {isLoading && <CircularProgress />}
              {isError && (
                <span className="text-red-800">{JSON.stringify(error)}</span>
              )}
              {!isError && (
                <span className="text-green-600 font-semibold line-height-15">
                  {data.data.message}
                </span>
              )}
            </span>
          )}
        </form>
      </section>
    </>
  );
};

export default DoubtsForm;
