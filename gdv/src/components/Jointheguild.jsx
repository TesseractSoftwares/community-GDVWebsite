import { Link } from "react-router-dom"

export const Jointheguild = () => {
    return (
        <section className={`flex justify-center items-center cta-gremio-bg`}>
            <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-10/12 font-bold">¡Impulsa tu pasión por los videojuegos!</h1>
                <p className="md:w-7/12 mb-6">Forma parte de nuestro gremio y lleva tu talento al siguiente nivel, consigue beneficios como mentorías y acceso a recursos de gran utilidad.</p>
                <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>¡Unirse al gremio!</Link>
            </div>
        </section>
    )
}