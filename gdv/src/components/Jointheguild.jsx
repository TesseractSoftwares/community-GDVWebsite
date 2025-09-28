import { Link } from "react-router-dom"

export const Jointheguild = () => {
    return (
        <section className={`flex justify-center items-center cta-gremio-bg`}>
            <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                <h1 className="mb-3 leading-tight text-2xl uppercase md:text-3xl md:w-10/12 font-bold">¡Take your company from passion to professional!</h1>
                <p className="md:w-7/12 mb-6">Be part of our association and take your talent to the next level. Get benefits like mentorships and get access to our networks.</p>
                <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-8 py-3 flex justify-center items-center'}>Join the association!</Link>
            </div>
        </section>
    )
}