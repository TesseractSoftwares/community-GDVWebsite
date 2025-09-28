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
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Benefits of being a member —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">Every member of the association has the following benefits</h3>
                </div>

                <div className="flex justify-center items-center mb-8">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon1} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Press</h5>
                            <p className="text-sm vgvalpo-textcolor6">Get info that will help you know of events and opportunities</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon2} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Networking</h5>
                            <p className="text-sm vgvalpo-textcolor6">Connect with the main companies and professional of the region</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon3} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Diffusion</h5>
                            <p className="text-sm vgvalpo-textcolor6">Get your project known with the help of the association.</p>
                        </div>

                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon4} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Education</h5>
                            <p className="text-sm vgvalpo-textcolor6">Get access to capacitation for your team of awesome game developers.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon5} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Consultancy</h5>
                            <p className="text-sm vgvalpo-textcolor6">Get advice from industry leaders and our international network.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon6} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Events</h5>
                            <p className="text-sm vgvalpo-textcolor6">Get access to meetups, showcases, workshops and much more.</p>
                        </div>
                        
                    </div>
                </div>
        </section>
    )
};