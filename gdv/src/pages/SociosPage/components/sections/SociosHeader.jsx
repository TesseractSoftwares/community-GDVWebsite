import { Link } from "react-router-dom";

export const SociosHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen socios-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12 font-bold">Nuestros <b className='font-bold vgvalpo-textcolor4'>Socios</b></h1>
                    <p className="md:w-8/12 mb-8">Nuestro gremio, junto a grandes empresas asociadas, impulsarán el talento Chileno a lo más alto de la industria de videojuegos</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
        </div>
    )
};