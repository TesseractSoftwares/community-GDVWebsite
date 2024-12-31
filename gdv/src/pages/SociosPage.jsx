import { useEffect, useState } from "react";
import { NavbarComponent } from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

// Ideal que el logotipo tenga una resolucion de 600x232
import Tesseract from '../img/31d223ced9cda0ec810a3cd9e262cb4dd3d95be6-5242880.png';

export const SociosPage = () => {
    const [socios, setSocios] = useState([]);

    const AddSocios = () => {
        setSocios([
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
            {
                logo: Tesseract,
                website: '...'
            },
        ]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        AddSocios();
    }, []);

    return (
        <div className="">
            <NavbarComponent />

            <div className={`flex justify-center items-center header-screen socios-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12 font-bold">Nuestros <b className='font-bold vgvalpo-textcolor4'>Socios</b></h1>
                    <p className="md:w-8/12 mb-8">Nuestro gremio, junto a grandes empresas asociadas, impulsarán el talento Chileno a lo más alto de la industria de videojuegos</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div>

            <section className='py-20 px-4 games-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Nuestros socios —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-5/12 text-2xl">Junto nuestros socios, impulsaremos el talento Chileno en el desarrollo de videojuegos</h3>
                </div>
            
                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {
                            socios.map((s) => (
                                <Link to={s.website} className="py-4 px-6 bg-white shadow-lg rounded-lg socios-card">
                                    <img src={s.logo} alt="" className="w-56" />
                                </Link>  
                            ))
                        }         
                    </div>
                </div>
            </section>

            <FooterComponent />
        </div>
    );
};