import { SuccessStories } from "../../../../components/SuccessStories";

import xbox from '../../../../img/plataforms/xbox.png'
import nintendo from '../../../../img/plataforms/nintendo.png'
import steam from '../../../../img/plataforms/steam.png'
import playstation from '../../../../img/plataforms/playstation.png'

import Gameimg1 from '../../../../img/carousel-img/ss_ee05d30c3e5edb819d9c6fdbb913b6f0a3f4a8b0.600x338.jpg'
import Gameimg2 from '../../../../img/carousel-img/ss_53a5f79f62d9a039d55e21b38f9938733e465187.600x338.jpg'
import Gameimg3 from '../../../../img/carousel-img/ss_1533d647b29a3dc3ec26405e4e59639c0f957e5a.600x338.jpg'

export const SuccessStoriesSection = () => {
    const successStories = [
            {
                title: 'Sky Oceans: Wings for Hire y su ascenso en el mundo de los videojuegos Chilenos',
                description: 'Sky Oceans: Wings for Hire, un videojuego creado por un grupo de desarrolladores chilenos llamado “Octeto Studios”, lanzado el 10 de Octubre del 2024, este nuevo JRPG busca un lugar dentro de la industria de videojuegos con su increibles graficos llamativos y coloridos. Conoce como la vida de un joven granjero se ve obligado a abandonar su isla natal y comenzar una nueva vida como pirata del cielo.',
                image: Gameimg1,
                info: '...', // URL de alguna plataforma
                plataforms: [
                    {name: xbox, url: '...'},
                    {name: nintendo, url: '...'},
                    {name: playstation, url: '...'},
                    {name: steam, url: '...'}
                ]
            },
            {
                title: 'Nocturia The Game: Un increible videojuego de Terror creado por desarrolladores Chilenos',
                description: 'Nocturia The Game, un videojuego centrado en el ambiente terrorifico, creado por la empresa BrossLab y lanzado el 23 de Junio del 2023 a traves de la plataforma de Steam con un valor de 4.700 CLP. La historia gira en entorno a las aventuras terrorificas de un niño llamado Timi, que tendrá que enfrentarse a una nueva y aterradora aventura lleno de acertijos que conducen a una secreta historia mientras una entidad maligna se esconde entre los rincones del hogar.',
                image: Gameimg2,
                info: '...', // URL de alguna plataforma
                plataforms: [
                    {name: steam, url: '...'}
                ]
            },
            {
                title: 'Headsnatchers: Un videojuego multijugador Increiblemente frenético de hasta 4 jugadores',
                description: 'Headsnatchers fue desarrollado por IguanaBee y lanzado el 7 de Noviembre del 2019 en la plataforma de Steam con un valor de 8.300 CLP, es un juego multijugador de hasta 4 jugadores en modo local y en línea, en donde podrás desafiar a tus amigos a intensas peleas en las que el objetivo es arrancarles la cabeza de entre los hombros y usarla para conseguir la deseada victoria.',
                image: Gameimg3,
                info: '...', // URL de alguna plataforma
                plataforms: [
                    {name: nintendo, url: '...'},
                    {name: playstation, url: '...'},
                    {name: steam, url: '...'}
                ]
            }
    ];

    return (
        <section className='py-20 px-4 games-bg'>
            <div className="mb-12 flex flex-col justify-center items-center text-center">
                <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Historias de éxito —</h6>
                <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Historias de éxito que ponen a Chile en el mundo de los videojuegos!</h3>
            </div>
        
            <div className="flex justify-center items-center flex-col gap-16">
                {
                    successStories.map((s) => (
                        <SuccessStories title={s.title} description={s.description} image={s.image} gameplataforms={s.plataforms} info={s.info} />
                    ))
                }
            </div>
        </section>
    )
};