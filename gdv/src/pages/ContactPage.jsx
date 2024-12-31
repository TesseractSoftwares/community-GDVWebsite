import { useEffect, useState, useRef } from "react";
import { NavbarComponent } from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export const ContactPage = () => {
    const [alert, setAlert] = useState('');
    const NameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const FormAlert = () => {
        const name = NameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || subject.trim() === '' || message.trim() === '') {
            setAlert('No pueden existir campos vacios...');

            setTimeout(() => {
                setAlert('')
            }, 3000)
        }
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        FormAlert();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="">
            <NavbarComponent />

            {/* <div className={`flex justify-center items-center header-screen contact-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-11/12 font-bold">Contacta con <b className='font-bold vgvalpo-textcolor4'>Nosotros</b></h1>
                    <p className="md:w-8/12 mb-8">Si tienes dudas o consultas acerca de nuestro gremio, no dudes en contactarnos mediante el formulario de contacto en nuestra página web, cuentanos detalladamente tus inquietudes y te contactaremos lo antes posible.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>¡Unete al Gremio!</Link>
                </div>
            </div> */}

            <section className='py-20 px-4 games-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 md:text-base text-xs">— Contactanos —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">Completa el formulario a continuación para contactar con nosotros</h3>
                </div>
            
                <div className="flex justify-center items-center">
                    <form className="md:w-5/12 w-full bg-white p-8 shadow-lg rounded-xl" onSubmit={HandleSubmit} action="..." method="POST">
                        <div class="mb-3">
                            <label for="name" className="block mb-2 text-sm font-bold">Nombre</label>
                            <input type="text" ref={NameRef} id="name" name="name" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-3">
                            <label for="email" className="block mb-2 text-sm font-bold">Correo</label>
                            <input type="email" ref={emailRef} id="email" name="email" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ejemplo@outlook.com" required />
                        </div>
                        <div class="mb-3">
                            <label for="phone" className="block mb-2 text-sm font-bold">Teléfono</label>
                            <input type="text" ref={phoneRef} id="phone" name="phone" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-3">
                            <label for="subject" className="block mb-2 text-sm font-bold">Asunto</label>
                            <input type="text" ref={subjectRef} id="subject" name="subject" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-2">
                            <label for="message" className="block mb-2 text-sm font-bold">Mensaje</label>
                            <textarea id="message" ref={messageRef} name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Mensaje..." required></textarea>
                        </div>

                        <p className="text-red-600 mb-5">{alert}</p>

                        <button type="submit" className="text-white vgvalpo-bgcolor5 rounded-md px-10 text-sm py-2 flex justify-center items-center">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>

            <FooterComponent />
        </div>
    );
};