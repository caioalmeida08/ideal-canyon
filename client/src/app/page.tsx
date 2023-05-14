"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/Navbar/NavLink";
import Hero from "../components/Home/Hero";
import Review from "../components/Home/Review";
import Benefits from "../components/Home/Benefits";
import Product from "@/components/Home/Product";
import MeetTheTeam from "../components/Home/MeetTheTeam";
import FAQ from "../components/Home/Faq";

import "../styles/reset.css";
import "../styles/utils.scss";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar>
                <NavLink href="#products_section">Modelos</NavLink>
                <NavLink href="#doubts_form">Contato</NavLink>
                <NavLink href="#footer">Sobre</NavLink>
            </Navbar>
            <Hero />
            <Review />
            <Benefits />
            <Product modelShortProp="canyon-elite-scooter" />
            <MeetTheTeam />
            <FAQ />
        </QueryClientProvider>
    );
}
