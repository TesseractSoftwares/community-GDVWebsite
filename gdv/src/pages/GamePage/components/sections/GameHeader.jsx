import { Link } from "react-router-dom";

export const GameHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen videogames-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-10/12 font-bold">Videojuegos <b className='font-bold vgvalpo-textcolor4'>Chilenos</b></h1>
                    <p className="md:w-8/12 mb-8">Explora un mundo de videojuegos chilenos, donde la creatividad y la innovación se unen para ofrecer experiencias únicas y divertidas.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
        </div>
    )
};