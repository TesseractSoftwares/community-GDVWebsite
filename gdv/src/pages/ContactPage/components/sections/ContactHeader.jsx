import { Link } from "react-router-dom"

export const ContactHeader = () => {
    return (
        <div className={`flex justify-center items-center header-screen contact-header-img`}>
                <div className={`flex justify-center md:items-center md:text-center text-white flex-col px-8`}>
                    <h1 className="mb-5 leading-tight uppercase text-4xl md:text-6xl md:w-11/12 font-bold">Contact <b className='font-bold vgvalpo-textcolor4'>Us</b></h1>
                    <p className="md:w-8/12 mb-8">If you have questions or doubts about our association, don't hesitate to contact us through the contact form on our website, tell us your concerns in detail and we will contact you as soon as possible.</p>
                    <Link to={'...'} className={'vgvalpo-gradient-btn rounded-md px-8 py-3 flex justify-center items-center'}>Join the Association!</Link>
                </div>
        </div>
    )
}