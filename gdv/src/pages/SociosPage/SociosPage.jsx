import { useEffect, useState } from "react";
import { NavbarComponent } from "../../components/Navbar";
import { FooterComponent } from "../../components/Footer";
import { Link } from "react-router-dom";
import { SociosHeader } from "./components/sections/SociosHeader";

// Ideal que el logotipo tenga una resolucion de 600x232
import Tesseract from '../../img/31d223ced9cda0ec810a3cd9e262cb4dd3d95be6-5242880.png';

export const SociosPage = () => {
    const [socios, setSocios] = useState([]);

    const AddSocios = () => {
        setSocios([
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
            {logo: Tesseract, website: '...'},
        ]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        AddSocios();
    }, []);

    return (
        <div className="">
            <NavbarComponent />

            <header>
                <SociosHeader />
            </header>

            <main>
                <section className='py-20 px-4 games-bg'>
                    <div className="mb-12 flex flex-col justify-center items-center text-center">
                        <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Nuestros socios —</h6>
                        <h3 className="font-bold text-black md:text-3xl md:w-5/12 text-2xl">Junto nuestros socios, impulsaremos el talento Chileno en el desarrollo de videojuegos</h3>
                    </div>
                
                    <div className="flex flex-col justify-center items-center">
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
                            {
                                socios.map((s) => (
                                    <Link to={s.website} className="w-60 h-32 p-6 flex justify-center items-center bg-white hover:shadow-xl rounded-lg socios-card">
                                        <img src={s.logo} alt="" className="w-full" />
                                    </Link>  
                                ))
                            }         
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </div>
    );
};