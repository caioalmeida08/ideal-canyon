import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import NavLink from "@/components/Navbar/NavLink";
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
    return (
        <>
            <PageTitle title="Ideal Canyon" />
            <Navbar>
                <NavLink href="#products_section">Modelos</NavLink>
                <NavLink href="#doubts_form">Contato</NavLink>
                <NavLink href="#footer">Sobre</NavLink>
            </Navbar>
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
