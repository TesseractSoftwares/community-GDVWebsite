import { Link } from "react-router-dom";
import Logo from '../img/logo-Photoroom.png'

export const FooterComponent = () => {

    return (
        <footer className="vgvalpo-bgcolor1 text-white px-6 text-center">
            <div className="flex py-6 mb-10 pt-20 justify-center md:items-center md:gap-20 gap-10 flex-col md:flex-row">
                <div className="flex text-left md:gap-32 gap-10 flex-col md:flex-row">
                    <div className="md:w-96">
                        <h5 className="text-lg mb-3 text-miramar-blackcian font-bold">Sobre nosotros</h5>
                        <p className="vgvalpo-textcolor6 text-ms">¡Somos un gremio dedicado apoyar el talento chileno en videojuegos! Descubre experiencias únicas que reflejan nuestra cultura y pasión por lo videojuegos y mucho mas.</p>
                    </div>
                    <div className="links">
                        <h5 className="text-lg mb-3 text-miramar-blackcian font-bold">Acceso rápido</h5>
                        <ul className="footer-list">
                            <Link to={'...'} className="text-white py-2 block vg-link vgvalpo-textcolor6 text-ms">Inicio</Link>
                            <Link to={'...'} className="text-white py-2 block vg-link vgvalpo-textcolor6 text-ms">Sobre nosotros</Link>
                            <Link to={'...'} className="text-white py-2 block vg-link vgvalpo-textcolor6 text-ms">Nuestros socios</Link>
                            <Link to={'...'} className="text-white py-2 block vg-link vgvalpo-textcolor6 text-ms">Videojuegos</Link>
                            <Link to={'...'} className="text-white py-2 block vg-link vgvalpo-textcolor6 text-ms">Contacto</Link>
                        </ul>
                    </div>
                    <div className="footer-rrss">
                        <h5 className="text-lg mb-3 text-miramar-blackcian font-bold">Nuestras redes</h5>
                        <ul className="footer-list">
                            <li className="mb-3 flex text-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-youtube flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-youtube text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-discord flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-discord text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-twitter-x flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-twitter-x text-black text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="my-border-top flex justify-center items-center">
                <img src={Logo} alt="" className='w-10 mr-4' />
                <p className="py-6 f-copy text-sm text-left">
                    VGVALPO 2024. Powered by <Link to={'https://www.tesseractsoftwares.com/'} target="_blank" className="tesseract-text">Tesseract&reg;</Link> 🚀
                </p>
            </div>
            
        </footer>
    );
};