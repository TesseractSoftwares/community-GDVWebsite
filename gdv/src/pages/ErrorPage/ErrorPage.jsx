import { NavbarComponent } from "../../components/Navbar";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <header>
                <div className={`flex justify-center items-center header-screen contact-header-img`}>
                    <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                        <h1 className="mb-5 leading-tight text-4xl md:text-6xl font-bold">Algo épico está en desarrollo...</h1>
                        <p className="mb-8 w-3/4">Nuestros diseñadores están trabajando a toda máquina para ofrecerte una experiencia única. Estamos a punto de revelar algo que dejará huella. ¡Solo unos días más!</p>
                        <Link to={'/'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>Volver al Inicio</Link>
                    </div>
                </div>
            </header>
        </div>
    );
};