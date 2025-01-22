import { Link } from "react-router-dom"

export const ContactHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen contact-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-11/12 font-bold">Contacta con <b className='font-bold vgvalpo-textcolor4'>Nosotros</b></h1>
                    <p className="md:w-8/12 mb-8">Si tienes dudas o consultas acerca de nuestro gremio, no dudes en contactarnos mediante el formulario de contacto en nuestra página web, cuentanos detalladamente tus inquietudes y te contactaremos lo antes posible.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
        </div>
    )
}