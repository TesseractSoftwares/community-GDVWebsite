import { Link } from "react-router-dom";
import profile from '../../../../img/member2.png';

export const Members = () => {
    const members = [
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        },
        {
            profile: profile,
            name: 'Nombre Apellido',
            rol: 'Tesorero',
            facebooklink: '...',
            instagramlink: '...'
        }
    ];

    return (
        <section className='py-20 px-4 games-bg'>
                <div className="mb-16 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Membresía gremial —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">¡Conoce a aquellas personas que forman parte de esta legendaria membresía!</h3>
                </div>

                <div className="flex justify-center items-center">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-16">
                        {
                            members.map((m) => (
                                <div className="w-60 flex items-center text-center flex-col">
                                    <div className="vgvalpo-gradient p-1 rounded-full mb-4">
                                        <img src={m.profile} alt="" className="rounded-full w-80 h-60 md:w-32 md:h-32 border-4"  />
                                    </div>
                                    <h5 className="text-black font-bold mb-1 text-xl">{m.name}</h5>
                                    <p className="text-lg vgvalpo-textcolor5 mb-3">{m.rol}</p>
                                    <div className="flex justify-center items-center gap-2">
                                        <Link to={m.facebooklink} className="bg-facebook flex items-center justify-center w-9 h-9 rounded-lg transition duration-500 hover:-translate-y-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                            </svg>
                                        </Link>
                                        <Link to={m.instagramlink} className="bg-instagram flex items-center justify-center w-9 h-9 rounded-lg transition duration-500 hover:-translate-y-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </section>
    )
};