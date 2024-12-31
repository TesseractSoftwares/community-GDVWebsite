import { NavbarComponent } from "../components/Navbar";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className="">
            <NavbarComponent />

            <div className={`flex justify-center items-center header-screen contact-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight text-4xl md:text-6xl font-bold">Error 404</h1>
                    <p className="mb-8">Lo sentimos, no se ha encontrado el contenido que estas buscando...</p>
                    <Link to={'/'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>Volver al Inicio</Link>
                </div>
            </div>
        </div>
    );
};