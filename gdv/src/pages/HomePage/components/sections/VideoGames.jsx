import { GameCard } from '../../../../components/GameCard'
import { Link } from 'react-router-dom'
import { getShuffledGames } from '../../../../data/gamesData'

export const VideoGames = () => {
    // Use centralized shuffled games data to be fair to all games
    const games = getShuffledGames();

    const getRandomGames = (gamesList, numberOfGames) => {
        // Games are already shuffled from getShuffledGames, just slice the number needed
        return gamesList.slice(0, numberOfGames);
    };

    const randomGames = getRandomGames(games, 8);

    return (
        <>
            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Great Games —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">Take a look at some of the best games of the region!</h3>
                </div>
            
                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {
                            randomGames.map((g) => (
                                <GameCard bgimg={g.image} title={g.title} description={g.description} link={g.link} gameplataforms={g.platforms} />
                            ))
                        }                       
                    </div>
                </div>
            </section>
            <section className={`flex justify-center items-center cta-games-bg`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-9/12 font-bold">Discover the games being born in Valparaíso</h1>
                    <p className="md:w-7/12 mb-6">Many games are being made in the Valparaíso Region. Every title tells a unique story, designed in region known for its culture, art and resilience.</p>
                    <Link to={'/videogames'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>See Video Games!</Link>
                </div>
            </section>
        </>
    )
};