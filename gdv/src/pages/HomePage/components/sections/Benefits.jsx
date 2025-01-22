import icon1 from '../../../../img/icons/News.png'
import icon2 from '../../../..//img/icons/People Working Together.png'
import icon3 from '../../../../img/icons/Commercial.png'
import icon4 from '../../../../img/icons/Education.png'
import icon5 from '../../../../img/icons/Business.png'
import icon6 from '../../../../img/icons/Tear-Off Calendar.png'

export const Benefits = () => {
    return (
        <section className='py-20 px-4 section-bg'>
                <div className="mb-16 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Benefios de inscripción —</h6>
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
    )
};