import { Link } from "react-router-dom"

export const HomeHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen home-header-img`}>
            <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12 font-bold">Making the Chilean video game Industry of <b className='font-bold vgvalpo-textcolor4'>Valparaíso Grow</b></h1>
                <p className="md:w-7/12 mb-8">We are an association dedicated to the Chilean talent born in the Region of Valparaíso! Discover unique experiences that reflect our culture and passion for video games and more.</p>
                <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>Join the Association!</Link>
            </div>
        </div>
    )
}