import { Link } from "react-router-dom";
import { NavbarComponent } from "../components/Navbar";
import { GameCard } from "../components/GameCard";
import ChileIcon from '../img/icons/Chile.png'
import { FooterComponent } from "../components/Footer";

import xbox from '../img/plataforms/xbox.png'
import nintendo from '../img/plataforms/nintendo.png'
import steam from '../img/plataforms/steam.png'
import playstation from '../img/plataforms/playstation.png'
import { useEffect, useState } from "react";

export const GamePage = () => {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const VideoGames = () => {
        setGames([
            {
                title: 'Nocturia The Game',
                description: 'Desde la perspectiva de un niño pequeño asechado por un ente maligno tendremos que adentrarnos durante...',
                image: 'bg-game1', // Esto es una clase que contiene un background-img
                plataforms: [
                    {name: steam, url: '...'}
                ]
            },
            {
                title: 'Sky Oceans: Wings for Hire',
                description: 'Sky Oceans: Wings For Hire es un homenaje a los clásicos JRPG. Ambientado en cielos abiertos, vive combates aéreos por...',
                image: 'bg-game2', // Esto es una clase que contiene un background-img
                plataforms: [
                    {name: xbox, url: '...'},
                    {name: nintendo, url: '...'},
                    {name: playstation, url: '...'},
                    {name: steam, url: '...'}
                ]
            },
            {
                title: 'Dandi World',
                description: 'El mundo de las artes ha sido invadido por un villano que odia las expresiones artísticas y quiere destruirlas...',
                image: 'bg-game3', // Esto es una clase que contiene un background-img
                plataforms: [
                    {name: steam, url: '...'}
                ]
            },
            {
                title: 'Headsnatchers',
                description: 'Agárrate la cabeza con Headsnatchers, un juego multijugador local y en línea de hasta 4 jugadores tremendamente frenético...',
                image: 'bg-game4', // Esto es una clase que contiene un background-img
                plataforms: [
                    {name: nintendo, url: '...'},
                    {name: playstation, url: '...'},
                    {name: steam, url: '...'}
                ]
            }
        ]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        VideoGames();
    }, []);

    const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="">
            <NavbarComponent />
            {/* <div className={`flex justify-center items-center header-screen videogames-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-10/12 font-bold">Videojuegos <b className='font-bold vgvalpo-textcolor4'>Chilenos</b></h1>
                    <p className="md:w-8/12 mb-8">Explora un mundo de videojuegos chilenos, donde la creatividad y la innovación se unen para ofrecer experiencias únicas y divertidas.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div> */}

            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex justify-center items-center flex-col md:flex-row gap-4">
                    <div className="flex items-center gap-2 max-w-md mx-auto ">
                        <img src={ChileIcon} alt="" className="w-10" />
                        <h3 className="text-xl font-bold vgvalpo-textcolor3">
                            Videojuegos Chilenos
                        </h3>
                    </div>
                    <div class="max-w-md mx-auto">
                        <div class="relative flex items-center">
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} class="w-80 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Buscar videojuego..." />
                            <button class="absolute right-0 top-0 bottom-0 vgvalpo-bgcolor5 text-white py-2 px-4 rounded-r-lg focus:outline-none">
                                <i class="bi bi-search text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {
                            filteredGames.map((g) => (
                                <GameCard bgimg={g.image} title={g.title} description={g.description} gameplataforms={g.plataforms} />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* <section className={`flex justify-center items-center cta-gremio-bg`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-10/12 font-bold">¡Impulsa tu pasión por los videojuegos!</h1>
                    <p className="md:w-7/12 mb-6">Forma parte de nuestro gremio y lleva tu talento al siguiente nivel, consigue beneficios como mentorías y acceso a recursos de gran utilidad.</p>
                    <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>¡Unirse al gremio!</Link>
                </div>
            </section> */}
            
            <FooterComponent />
        </div>
    );
};