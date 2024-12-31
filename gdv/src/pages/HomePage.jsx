import React, { useEffect, useState } from 'react';
import { NavbarComponent } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { GameCard } from '../components/GameCard';
import { FooterComponent } from '../components/Footer';
import { SuccessStories } from '../components/SuccessStories';

import Gameimg1 from '../img/carousel-img/ss_ee05d30c3e5edb819d9c6fdbb913b6f0a3f4a8b0.600x338.jpg'
import Gameimg2 from '../img/carousel-img/ss_53a5f79f62d9a039d55e21b38f9938733e465187.600x338.jpg'
import Gameimg3 from '../img/carousel-img/ss_1533d647b29a3dc3ec26405e4e59639c0f957e5a.600x338.jpg'
import icon1 from '../img/icons/News.png'
import icon2 from '../img/icons/People Working Together.png'
import icon3 from '../img/icons/Commercial.png'
import icon4 from '../img/icons/Education.png'
import icon5 from '../img/icons/Business.png'
import icon6 from '../img/icons/Tear-Off Calendar.png'

import xbox from '../img/plataforms/xbox.png'
import nintendo from '../img/plataforms/nintendo.png'
import steam from '../img/plataforms/steam.png'
import playstation from '../img/plataforms/playstation.png'

export const HomePage = () => {
    const [games, setGames] = useState([]);
    const [successStories, setSuccessStories] = useState([]);

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

        setSuccessStories([
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
        ])
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        VideoGames();
    }, [])

    return (
       <div className="relative">
            <NavbarComponent />

            <div className={`flex justify-center items-center header-screen home-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12 font-bold">Impulsando la industria de videojuegos <b className='font-bold vgvalpo-textcolor4'>Chilenos</b></h1>
                    <p className="md:w-7/12 mb-8">¡Somos un gremio dedicado apoyar el talento chileno en videojuegos! Descubre experiencias únicas que reflejan nuestra cultura y pasión por lo videojuegos y mucho más.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div>

            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Juegos destacados —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Echa un vistaso a los videjuegos Chilenos más destacados del 2024!</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {
                            games.map((g) => (
                                <GameCard bgimg={g.image} title={g.title} description={g.description} gameplataforms={g.plataforms} />
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

            <section className='py-20 px-4 games-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Historias de éxito —</h6>
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

            <section className='py-20 px-4 section-bg'>
                <div className="mb-16 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Benefios de inscripción —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">Aquellos miembros y socios del gremio cuentan con los siguientes beneficios</h3>
                </div>

                <div className="flex justify-center items-center mb-8">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon1} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Prensa</h5>
                            <p className="text-sm vgvalpo-textcolor6">Accedé a noticias de interés para la industria: convocatorias, premios, informes, entre otras.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon2} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Networking</h5>
                            <p className="text-sm vgvalpo-textcolor6">Contactate con los principales profesionales y referentes del sector de desarrollo de videojuegos en Chile.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon3} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Difusión</h5>
                            <p className="text-sm vgvalpo-textcolor6">Difundí tu proyecto con la ayuda de ADVA, y obtené presencia de marca en nuestra web.</p>
                        </div>

                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon4} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Educación</h5>
                            <p className="text-sm vgvalpo-textcolor6">Capacitá a tus empleados y ayudalos a alcanzar todo su potencial. Trabajamos con entidades educativas públicas y privadas de todo el país.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon5} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Asesoramiento</h5>
                            <p className="text-sm vgvalpo-textcolor6">Obtené asistencia profesional en temas legales y contables vinculados a los videojuegos.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon6} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Eventos</h5>
                            <p className="text-sm vgvalpo-textcolor6">Asiste a meetups y encuentros de capacitación para fomentar el networking y la profesionalización de nuestra comunidad.</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className={`flex justify-center items-center cta-gremio-bg`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-10/12 font-bold">¡Impulsa tu pasión por los videojuegos!</h1>
                    <p className="md:w-7/12 mb-6">Forma parte de nuestro gremio y lleva tu talento al siguiente nivel, consigue beneficios como mentorías y acceso a recursos de gran utilidad.</p>
                    <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>¡Unirse al gremio!</Link>
                </div>
            </section>

            <FooterComponent />
       </div>
    );
};