import React from 'react';
import { NavbarComponent } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { GameCard } from '../components/GameCard';
import { FooterComponent } from '../components/Footer';

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
    return (
       <div className="relative">
            <NavbarComponent />

            <div className={`flex justify-center items-center header-screen home-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12">Impulsando la industria de videojuegos <b className='font-normal vgvalpo-textcolor4'>Chilenos</b></h1>
                    <p className="md:w-7/12 mb-8">¡Somos un gremio dedicado apoyar el talento chileno en videojuegos! Descubre experiencias únicas que reflejan nuestra cultura y pasión por lo videojuegos y mucho más.</p>
                    <Link to={'...'} className={'vgvalpo-gradient rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div>

            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Juegos destacados —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Echa un vistaso a los videjuegos Chilenos más destacados del 2024!</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                        {/* TEMPORAL */}
                        <GameCard bgimg={'bg-game1'} title={'Nocturia The Game'} description={'Desde la perspectiva de un niño pequeño asechado por un ente maligno tendremos que adentrarnos durante...'} />
                        <GameCard bgimg={'bg-game2'} title={'Sky Oceans: Wings for Hire'} description={'Sky Oceans: Wings For Hire es un homenaje a los clásicos JRPG. Ambientado en cielos abiertos, vive combates aéreos por...'} />
                        <GameCard bgimg={'bg-game3'} title={'Dandi World'} description={'El mundo de las artes ha sido invadido por un villano que odia las expresiones artísticas y quiere destruirlas...'} />
                        <GameCard bgimg={'bg-game4'} title={'Headsnatchers'} description={'Agárrate la cabeza con Headsnatchers, un juego multijugador local y en línea de hasta 4 jugadores tremendamente frenético...'} />
                        <GameCard bgimg={'bg-game1'} title={'Nocturia The Game'} description={'Desde la perspectiva de un niño pequeño asechado por un ente maligno tendremos que adentrarnos durante...'} />
                        <GameCard bgimg={'bg-game2'} title={'Sky Oceans: Wings for Hire'} description={'Sky Oceans: Wings For Hire es un homenaje a los clásicos JRPG. Ambientado en cielos abiertos, vive combates aéreos por...'} />
                        <GameCard bgimg={'bg-game3'} title={'Dandi World'} description={'El mundo de las artes ha sido invadido por un villano que odia las expresiones artísticas y quiere destruirlas...'} />
                        <GameCard bgimg={'bg-game4'} title={'Headsnatchers'} description={'Agárrate la cabeza con Headsnatchers, un juego multijugador local y en línea de hasta 4 jugadores tremendamente frenético...'} />
                    </div>
                </div>
            </section>

            <section className={`flex justify-center items-center cta-games-bg`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-9/12 font-bold">Descubre los Videojuegos que Nacen en Chile</h1>
                    <p className="md:w-7/12 mb-6">Descubre los videojuegos chilenos que están marcando la pauta en la industria. Cada título cuenta una historia única, diseñada con pasión y dedicación por desarrolladores Chilenos.</p>
                    <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>¡Ver videojuegos!</Link>
                </div>
            </section>

            <section className='py-20 px-4 games-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Historias de éxito —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Historias de éxito que ponen a Chile en el mundo de los videojuegos!</h3>
                </div>

                <div className="flex justify-center items-center flex-col gap-16">
                    <div className="flex justify-center items-center flex-col md:flex-row gap-5">
                        <div className="p-4 md:w-3/12">
                            <h5 className="text-black font-bold text-lg mb-2">Sky Oceans: Wings for Hire y su ascenso en el mundo de los videojuegos Chilenos</h5>
                            <p className="text-black text-sm vgvalpo-textcolor6 mb-2">Sky Oceans: Wings for Hire, un videojuego creado por un grupo de desarrolladores chilenos llamado “Octeto Studios”, lanzado el 10 de Octubre del 2024, este nuevo JRPG busca un lugar dentro de la industria de videojuegos con su increibles graficos llamativos y coloridos. Conoce como la vida de un joven granjero se ve obligado a abandonar su isla natal y comenzar una nueva vida como pirata del cielo.</p>
                            <div className="flex gap-2">
                                <b className='font-bold vgvalpo-textcolor3'>Disponible en la plataforma:</b>
                                <div className="flex justify-center items-center gap-1">
                                    <img src={xbox} alt="" style={{width: '25px', height: '25px'}} />
                                    <img src={nintendo} alt="" style={{width: '25px', height: '25px'}} />
                                    <img src={playstation} alt="" style={{width: '25px', height: '25px'}} />
                                    <img src={steam} alt="" style={{width: '25px', height: '25px'}} />
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center text-white'}>¡Ver más!</Link>
                            </div>
                        </div>
                        <img src={Gameimg1} alt="game-bg" className='rounded-lg' />
                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5">
                        <div className="p-4 md:w-3/12">
                            <h5 className="text-black font-bold text-lg mb-2">Nocturia The Game: Un increible videojuego de Terror creado por desarrolladores Chilenos</h5>
                            <p className="text-black text-sm vgvalpo-textcolor6 mb-2">Nocturia The Game, un videojuego centrado en el ambiente terrorifico, creado por la empresa BrossLab y lanzado el 23 de Junio del 2023 a traves de la plataforma de Steam con un valor de 4.700 CLP. La historia gira en entorno a las aventuras terrorificas de un niño llamado Timi, que tendrá que enfrentarse a una nueva y aterradora aventura lleno de acertijos que conducen a una secreta historia mientras una entidad maligna se esconde entre los rincones del hogar.</p>
                            <div className="flex gap-2">
                                <b className='font-bold vgvalpo-textcolor3'>Disponible en la plataforma:</b>
                                <div className="flex justify-center items-center gap-1">
                                    <img src={steam} alt="" style={{width: '25px', height: '25px'}} />
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center text-white'}>¡Ver más!</Link>
                            </div>
                        </div>
                        <img src={Gameimg2} alt="game-bg" className='rounded-lg' />
                    </div>

                    <div className="flex justify-center items-center flex-col md:flex-row gap-5">
                        <div className="p-4 md:w-3/12">
                            <h5 className="text-black font-bold text-lg mb-2">Headsnatchers: Un videojuego multijugador Increiblemente frenético para hasta 4 jugadores</h5>
                            <p className="text-black text-sm vgvalpo-textcolor6 mb-2">Nocturia The Game, un videojuego centrado en el ambiente terrorifico, creado por la empresa BrossLab y lanzado el 23 de Junio del 2023 a traves de la plataforma de Steam con un valor de 4.700 CLP. La historia gira en entorno a las aventuras terrorificas de un niño llamado Timi, que tendrá que enfrentarse a una nueva y aterradora aventura lleno de acertijos que conducen a una secreta historia mientras una entidad maligna se esconde entre los rincones del hogar.</p>
                            <div className="flex gap-2">
                                <b className='font-bold vgvalpo-textcolor3'>Disponible en la plataforma:</b>
                                <div className="flex justify-center items-center gap-1">
                                    <img src={nintendo} alt="" style={{width: '25px', height: '25px'}} />
                                    <img src={playstation} alt="" style={{width: '25px', height: '25px'}} />
                                    <img src={steam} alt="" style={{width: '25px', height: '25px'}} />
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center text-white'}>¡Ver más!</Link>
                            </div>
                        </div>
                        <img src={Gameimg3} alt="game-bg" className='rounded-lg' />
                    </div>
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
                            <p className="text-sm vgvalpo-textcolor6">Contactate con los principales profesionales y referentes del sector de desarrollo de videojuegos en Argentina.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon3} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Difusión</h5>
                            <p className="text-sm vgvalpo-textcolor6">Difundí tu proyecto con la ayuda de ADVA, y obtené presencia de marca en nuestra web.</p>
                        </div>

                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon4} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Prensa</h5>
                            <p className="text-sm vgvalpo-textcolor6">Accedé a noticias de interés para la industria: convocatorias, premios, informes, entre otras.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon5} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Networking</h5>
                            <p className="text-sm vgvalpo-textcolor6">Contactate con los principales profesionales y referentes del sector de desarrollo de videojuegos en Argentina.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon6} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Difusión</h5>
                            <p className="text-sm vgvalpo-textcolor6">Difundí tu proyecto con la ayuda de ADVA, y obtené presencia de marca en nuestra web.</p>
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