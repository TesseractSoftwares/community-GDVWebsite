import xbox from '../../../../img/plataforms/xbox.png'
import nintendo from '../../../../img/plataforms/nintendo.png'
import steam from '../../../../img/plataforms/steam.png'
import playstation from '../../../../img/plataforms/playstation.png'
import { GameCard } from '../../../../components/GameCard'
import { Link } from 'react-router-dom'

export const VideoGames = () => {
    const games = [
        {
            title: 'Nocturia The Game',
            description: 'Desde la perspectiva de un niño pequeño asechado por un ente maligno tendremos que adentrarnos durante...',
            image: 'bg-game1', // Esto es una clase que contiene un background-img
            link: '...',
            plataforms: [
                {name: steam, url: '...'}
            ]
        },
        {
            title: 'Sky Oceans: Wings for Hire',
            description: 'Sky Oceans: Wings For Hire es un homenaje a los clásicos JRPG. Ambientado en cielos abiertos, vive combates aéreos por...',
            image: 'bg-game2', // Esto es una clase que contiene un background-img
            link: '...',
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
            link: '...',
            plataforms: [
                {name: steam, url: '...'}
            ]
        },
        {
            title: 'Headsnatchers',
            description: 'Agárrate la cabeza con Headsnatchers, un juego multijugador local y en línea de hasta 4 jugadores tremendamente frenético...',
            image: 'bg-game4', // Esto es una clase que contiene un background-img
            link: '...',
            plataforms: [
                {name: nintendo, url: '...'},
                {name: playstation, url: '...'},
                {name: steam, url: '...'}
            ]
        },
        {
            title: 'Nocturia The Game',
            description: 'Desde la perspectiva de un niño pequeño asechado por un ente maligno tendremos que adentrarnos durante...',
            image: 'bg-game1', // Esto es una clase que contiene un background-img
            link: '...',
            plataforms: [
                {name: steam, url: '...'}
            ]
        },
        {
            title: 'Sky Oceans: Wings for Hire',
            description: 'Sky Oceans: Wings For Hire es un homenaje a los clásicos JRPG. Ambientado en cielos abiertos, vive combates aéreos por...',
            image: 'bg-game2', // Esto es una clase que contiene un background-img
            link: '...',
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
            link: '...',
            plataforms: [
                {name: steam, url: '...'}
            ]
        },
        {
            title: 'Headsnatchers',
            description: 'Agárrate la cabeza con Headsnatchers, un juego multijugador local y en línea de hasta 4 jugadores tremendamente frenético...',
            image: 'bg-game4', // Esto es una clase que contiene un background-img
            link: '...',
            plataforms: [
                {name: nintendo, url: '...'},
                {name: playstation, url: '...'},
                {name: steam, url: '...'}
            ]
        }
    ];

    const getRandomGames = (gamesList, numberOfGames) => {
        const shuffled = [...gamesList].sort(() => Math.random() - 0.5); // Mezcla aleatoria
        return shuffled.slice(0, numberOfGames); // Devuelve los primeros 8 juegos
    };

    const randomGames = getRandomGames(games, 8);

    return (
        <>
            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Juegos destacados —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Echa un vistaso a los videjuegos Chilenos más destacados del 2024!</h3>
                </div>
            
                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {
                            randomGames.map((g) => (
                                <GameCard bgimg={g.image} title={g.title} description={g.description} link={g.link} gameplataforms={g.plataforms} />
                            ))
                        }                       
                    </div>
                </div>
            </section>
            <section className={`flex justify-center items-center cta-games-bg`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-9/12 font-bold">Descubre los Videojuegos que Nacen en Chile</h1>
                    <p className="md:w-7/12 mb-6">Descubre los videojuegos chilenos que están marcando la pauta en la industria. Cada título cuenta una historia única, diseñada con pasión y dedicación por desarrolladores Chilenos.</p>
                    <Link to={'/videogames'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>¡Ver videojuegos!</Link>
                </div>
            </section>
        </>
    )
};