import { Link } from "react-router-dom";

export const SociosHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen socios-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-9/12 font-bold">Our <b className='font-bold vgvalpo-textcolor4'>Partners</b></h1>
                    <p className="md:w-8/12 mb-8">Our association, together with great partner companies, will propel Chilean talent to the highest levels of the video game industry</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>Join the Guild!</Link>
                </div>
        </div>
    )
};