import { NavbarComponent } from "../../components/Navbar";
import { FooterComponent } from "../../components/Footer";
import { useEffect } from "react";
import { AboutusSection } from "./components/sections/AboutusSection";
import { Members } from "./components/sections/Members";
import { Jointheguild } from "../../components/Jointheguild";

export const AboutusPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="">
            <NavbarComponent />
            <main>
                <AboutusSection />
                <Members />
                < Jointheguild />
            </main>
            <FooterComponent />
        </div>
    );
};