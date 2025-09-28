import aboutus from '../../../../img/team-working-animation-project.jpg';
import icon1 from '../../../../img/icons/Prize.png';
import icon2 from '../../../../img/icons/Goal.png';
import icon3 from '../../../../img/icons/Eye.png';

export const AboutusSection = () => {
    return (
        <section className='py-20 px-4 section-bg'>
                <div className="mb-12 flex flex-col justify-center items-center text-center">
                    <h6 className="mb-2 vgvalpo-textcolor3 text-base">— About us —</h6>
                    <h3 className="font-bold text-black md:text-3xl md:w-5/12 text-2xl">We are a game developers association dedicated to help creators in Valparaíso make the best games and be seen!</h3>
                </div>

                <div className="flex justify-center items-center flex-col gap-16 mb-24">
                    <div className="flex justify-center items-center flex-col md:flex-row gap-8">
                        <img src={aboutus} alt="game-bg" className='rounded-lg md:w-1/3' />
                        <div className="flex flex-col md:w-4/12">
                            <div className="p-4">
                                <h5 className="text-black font-bold text-3xl mb-2 vgvalpo-textcolor3">Who we are</h5>
                                <p className="text-black text-sm vgvalpo-textcolor6">We are a group of game development companies focused on making a great ecosystem for game developers in the region and investors that want to come and benefit from the talent available here. We are also working on connecting with public institutions, other associations and investors to bring games from Valparaíso to the world!</p>
                            </div>
                            <div className="p-4">
                                <h5 className="text-black font-bold text-3xl mb-2 vgvalpo-textcolor3">Our association</h5>
                                <p className="text-black text-sm vgvalpo-textcolor6">GDV is a space dedicated to connect, help and promote game developers of Valparaíso. Our main goal is to promote local talent, bringing resources and opportunities to those who need them. From connecting with investors to learning how to publish your first game, GDV is the place where creators can grow into successful companies.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-8">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon1} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Values</h5>
                            <p className="text-sm vgvalpo-textcolor6">We believe that games made in Valparaíso are amazing and we want to help creators as much as we can.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon2} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Objectives</h5>
                            <p className="text-sm vgvalpo-textcolor6">We want to be the best place to make games in Chile.</p>
                        </div>
                        <div className="w-60 flex items-center text-center flex-col">
                            <img src={icon3} alt="" className='w-4/12 vgvalpo-gradient p-5 rounded-full mb-4' />
                            <h5 className="vgvalpo-textcolor5 font-bold mb-2 text-xl">Vision</h5>
                            <p className="text-sm vgvalpo-textcolor6">We want to be one of the biggest game development regions of Latin America.</p>
                        </div>                   
                    </div>
                </div>
        </section>
    )
};