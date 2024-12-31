import { NavbarComponent } from "../components/Navbar";
import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import aboutus from '../img/team-working-animation-project.jpg';
import icon1 from '../img/icons/Prize.png';
import icon2 from '../img/icons/Goal.png';
import icon3 from '../img/icons/Eye.png';
import profile from '../img/member2.png';
import { useEffect } from "react";

export const AboutusPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="">
            <NavbarComponent />

            {/* <div className={`flex justify-center items-center header-screen aboutus-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-7/12 font-bold">Juntos apoyamos el talento chileno en los <b className='font-bold vgvalpo-textcolor4'>videojuegos</b></h1>
                    <p className="md:w-7/12 mb-8">¡Somos un gremio dedicado apoyar el talento chileno en videojuegos! Descubre experiencias únicas que reflejan nuestra cultura y pasión por lo videojuegos y mucho más.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div> */}

            <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Sobre nosotros —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-5/12 text-2xl">Somos un gremio dedicado en impulsar el talento Chileno hacia la industria de videojuegos</h3>
                </div>

                <div className="flex justify-center items-center flex-col gap-16 mb-24">
                    <div className="flex justify-center items-center flex-col md:flex-row gap-8">
                        <img src={aboutus} alt="game-bg" className='rounded-lg md:w-1/3' />
                        <div className="flex flex-col md:w-4/12">
                            <div className="p-4">
                                <h5 className="text-black font-bold text-3xl mb-2 vgvalpo-textcolor3">¿Quienes somos?</h5>
                                <p className="text-black text-sm vgvalpo-textcolor6">Somos un grupo de personas unidas por la pasión por los videojuegos y la creencia en el potencial que tiene Chile para destacar en este emocionante sector de los videojuegos. A través de eventos, talleres y una comunidad activa, trabajamos juntos para crear un entorno colaborativo que impulse la innovación y la creatividad de quienes desean o estan creando un videojuego en Chile.</p>
                            </div>
                            <div className="p-4">
                                <h5 className="text-black font-bold text-3xl mb-2 vgvalpo-textcolor3">Nuestro Gremio</h5>
                                <p className="text-black text-sm vgvalpo-textcolor6">GDV es un espacio dedicado a apoyar y fomentar la industria de videojuegos en nuestro país. Nuestro compromiso es potenciar el talento local, brindando recursos, formación y oportunidades para desarrolladores, creadores y entusiastas del gaming, ya seas un desarrollador experimentado o uno nuevo, en nuestro gremio encontrarás un lugar donde compartir ideas, aprender y crecer junto a otros. Únete a nosotros y se parte de la evolución de los videojuegos chilenos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-8">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon1} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Valores</h5>
                            <p className="text-sm vgvalpo-textcolor6">Accedé a noticias de interés para la industria: convocatorias, premios, informes, entre otras..</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon2} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Objetivo</h5>
                            <p className="text-sm vgvalpo-textcolor6">Accedé a noticias de interés para la industria: convocatorias, premios, informes, entre otras.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon3} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Visión</h5>
                            <p className="text-sm vgvalpo-textcolor6">Accedé a noticias de interés para la industria: convocatorias, premios, informes, entre otras..</p>
                        </div>                   
                    </div>
                </div>
            </section>

            <section className='py-20 px-4 games-bg'>
                <div className="mb-16 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Membresía gremial —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Conoce a aquellas personas que forman parte de esta legendaria membresía!</h3>
                </div>

                <div className="flex justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-16">
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        



                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                <img src={profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                            </div>
                            <h5 className="text-black font-bold mb-1 text-xl">Nombre Apellido</h5>
                            <p className="text-lg vgvalpo-textcolor5 mb-3">Tesorero</p>
                            <div className="flex justify-center items-center gap-2">
                                <Link to={'...'} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-facebook text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                                <Link to={'...'} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg">
                                    <i class="bi bi-instagram text-white text-lg" style={{width: '27px', height: '27px'}}></i>
                                </Link>
                            </div>
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