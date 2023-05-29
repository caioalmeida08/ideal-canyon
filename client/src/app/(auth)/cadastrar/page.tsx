import { FunctionComponent } from "react";

import Register from "../../../components/Auth/Register";
import Navbar from "../../../components/Navbar/Navbar";

type CadastrarProps = {};

const Cadastrar: FunctionComponent<CadastrarProps> = () => {
  return (
    <>
      <Navbar />
      <Register />
    </>
  );
};

export default Cadastrar;
