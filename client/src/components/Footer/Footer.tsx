import style from "./Footer.module.scss";
import LogoAndText from "../Utils/LogoAndText";
<<<<<<< HEAD

const Footer = () => {
  return ( 
=======
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
>>>>>>> e4902be (fix: converted to .tsx)
    <>
      <footer
        className={`${style.footer} section-dark section-margin-top`}
        id="footer"
      >
        <LogoAndText />
        <div>
          <div className="footer-informations">
            <h3 className="text-main text-center text-demi">Informações</h3>
            <p>
              Ideal Canyon LTDA
              <br />
              CNPJ: 00.000.000/0000-00
            </p>
            <br />
            <p>Rua das Flores, 123 - Centro, São Paulo/SP</p>
            <br />
            <p>
              Telefone: (11) 5555-1234
              <br />
              E-mail: ideal.canyon@contato.com
            </p>
          </div>
          <div className="footer-social-media">
            <h3 className="text-main text-center text-demi">Redes sociais</h3>
            <p>
              Instagram:
              <br />
              <a href="">instagram.com/ideal_canyon</a>
            </p>
            <br />
            <p>
              Facebook:
              <br />
              <a href="">facebook.com/of_ideal_canyon</a>
            </p>
            <br />
            <p>
              Twitter:
              <br />
              <a href="">twitter.com/ideal_canyon1</a>
            </p>
          </div>
          <div className="footer-legislatives">
            <h3 className="text-main text-center text-demi">Legislativos</h3>
            <a href="">Política de privacidade</a>
            <br />
            <br />
            <a href="">Termo de uso</a>
          </div>
        </div>
      </footer>
    </>
<<<<<<< HEAD
   );
}
 
export default Footer;
=======
  );
};

export default Footer;
>>>>>>> e4902be (fix: converted to .tsx)
