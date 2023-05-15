import { FunctionComponent } from "react";

import Layout from "@/components/Layout/Layout";
import Register from "@/components/Auth/Register";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

type CadastrarProps = {};

const Cadastrar: FunctionComponent<CadastrarProps> = () => {
    return (
        <>
            <Layout>
                <Navbar />
                <Register />
                <Footer />
            </Layout>
        </>
    );
};

export default Cadastrar;
