import { useEffect, useState, useRef } from "react";
import { NavbarComponent } from "../../components/Navbar";
import { FooterComponent } from "../../components/Footer";

export const ContactPage = () => {
    const [alert, setAlert] = useState('');
    const NameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const FormAlert = () => {
        const name = NameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        if (name.trim() === '' || email.trim() === '' ||  subject.trim() === '' || message.trim() === '') {
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
            <main>
                <section className='games-bg'>  
                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <div className="w-full py-20 md:h-myh h-44 bg-contact"></div>
                        <form className="w-full header-screen bg-white p-9" onSubmit={HandleSubmit} action="..." method="POST">
                            <p className="text-3xl font-bold mb-8 vgvalpo-textcolor3">Formulario de contacto</p>
                            <div class="mb-3">
                                <label for="name" className="block mb-2 text-base font-bold">Nombre</label>
                                <input type="text" ref={NameRef} id="name" name="name" className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" className="block mb-2 text-base font-bold">Correo</label>
                                <input type="email" ref={emailRef} id="email" name="email" className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ejemplo@outlook.com" required />
                            </div>
                            <div class="mb-3">
                                <label for="subject" className="block mb-2 text-base font-bold">Asunto</label>
                                <input type="text" ref={subjectRef} id="subject" name="subject" className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div class="mb-2">
                                <label for="message" className="block mb-2 text-base font-bold">Mensaje</label>
                                <textarea id="message" ref={messageRef} name="message" rows="4" className="block p-2.5 w-full text-base text-gray-900 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Mensaje..." required></textarea>
                            </div>

                            <p className="text-red-600 mb-5">{alert}</p>

                            <button type="submit" className="text-white vgvalpo-bgcolor5 rounded-md px-10 text-base py-2 flex justify-center items-center">
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </div>
    );
};