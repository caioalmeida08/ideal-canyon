"use client"

import { FunctionComponent } from "react";
import { InputText, InputDate, InputEmail, InputPassword, } from "../Utils/Inputs";

import style from "./Register.module.scss";
import { ButtonSubmit } from "../Utils/Buttons";

interface RegisterProps { }

const handleSubmit = async (e: any) => {
    e.preventDefault();

    // turn form data into json
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // check if passwords match
    if (formDataObj.user_password !== formDataObj.user_password_confirm) {
        const errorDisplay = document.getElementById('error_display');
        errorDisplay.innerHTML = 'As senhas não coincidem.';
        errorDisplay.style.color = '#cc0000';
        errorDisplay.style.display = "block"
        return;
    }

    // check if emails match
    if (formDataObj.user_email !== formDataObj.user_email_confirm) {
        const errorDisplay = document.getElementById('error_display');
        errorDisplay.innerHTML = 'Os e-mails não coincidem.';
        errorDisplay.style.color = '#cc0000';
        errorDisplay.style.display = "block"
        return;
    }

    // send form data to server
    try {
        const response = await fetch('/api/cadastrar', {
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

        const errorDisplay = document.getElementById('error_display');
        errorDisplay.innerHTML = 'Cadastrado com sucesso! Você será redirecionado para a página de login.';
        errorDisplay.style.color = 'green';
        errorDisplay.style.display = "block"

    } catch (error) {
        // display error message
        const errorDisplay = document.getElementById('error_display');
        errorDisplay.innerHTML = error.message;
        errorDisplay.style.color = '#cc0000';
        errorDisplay.style.display = "block"

    }
}

const Register: FunctionComponent<RegisterProps> = () => {
    return (
        <>
            <section
                className={`${style.register} gap-h-32`}
            >
                <h1 className="text-center text-main text-h2">Cadastrar</h1>
                <form className="gap-h-24" onSubmit={handleSubmit}>
                    <InputText
                        label="Nome completo"
                        name="user_full_name"
                        placeholder="Seu nome completo"
                        required
                        pattern="[a-zA-Z\s]+"
                        width="max"
                    />
                    <InputDate
                        label="Data de nascimento"
                        name="user_date_of_birth"
                        required
                        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                        width=""
                        min="1900-01-01"
                        max="2005-01-01"
                    />
                    <InputEmail
                        label="E-mail"
                        name="user_email"
                        placeholder="Ex: usuario@plataforma.com"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        width="max"
                    />
                    <InputEmail
                        label="Confirmar e-mail"
                        name="user_email_confirm"
                        placeholder="Confirme seu e-mail."
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        width="max"
                    />
                    <InputPassword
                        label="Senha"
                        name="user_password"
                        placeholder="Sua senha. Mínimo de 8 caracteres."
                        required
                        pattern=".{8,}"
                        width="max"
                    />
                    <InputPassword
                        label="Confirmar senha"
                        name="user_password_confirm"
                        placeholder="Confirme sua senha."
                        required
                        pattern=".{8,}"
                        width="max"
                    />
                    <ButtonSubmit
                        text="Confirmar cadastro"
                        id="register_submit"
                    />
                    <span id="error_display"></span>
                    <p className="text-desktop-justify line-height-125">
                        Ao cadastrar uma conta no site da Ideal Canyon, você
                        confirma que tem conhecimento dos termos de serviço e da
                        política de privacidade da empresa e concorda com as
                        condições especificadas nos mesmos.
                    </p>
                </form>
            </section>
        </>
    );
};

export default Register;
