import { FunctionComponent } from "react";

import Register from "../../../components/Auth/Register";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

type CadastrarProps = {};

const Cadastrar: FunctionComponent<CadastrarProps> = () => {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
};

export default Cadastrar;
