import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Home/Hero";
import PageTitle from "@/components/Utils/PageTitle";

import Review from "@/components/Home/Review";
import Benefits from "@/components/Home/Benefits";
import Product from "@/components/Home/Product";
import MeetTheTeam from "@/components/Home/MeetTheTeam";
import DoubtsForm from "@/components/Home/DoubtsForm";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    const [navItems, setNavItems] = useState([
        { title: "Carregando...", url: "#" },
    ]);

    useEffect(() => {
        setNavItems([
            { title: "Modelos", url: "#modelos" },
            { title: "Contatos", url: "#contatos" },
            { title: "Sobre", url: "/sobre" },
        ]);
    }, []);

    return (
        <>
            <PageTitle title="Ideal Canyon" />
            <Navbar {...navItems} />
            <Hero />
            <Review />
            <Benefits />
            <Product />
            <MeetTheTeam />
            <Faq />
            <DoubtsForm />
            <Footer />
        </>
    );
}
