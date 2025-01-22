import aboutus from '../../../../img/team-working-animation-project.jpg';
import icon1 from '../../../../img/icons/Prize.png';
import icon2 from '../../../../img/icons/Goal.png';
import icon3 from '../../../../img/icons/Eye.png';

export const AboutusSection = () => {
    return (
        <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Sobre nosotros —</h6>
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
    )
};