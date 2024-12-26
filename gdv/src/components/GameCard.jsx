import { Link } from "react-router-dom";
import xbox from '../img/plataforms/xbox.png'
import nintendo from '../img/plataforms/nintendo.png'
import steam from '../img/plataforms/steam.png'
import playstation from '../img/plataforms/playstation.png'

export const GameCard = ({ title, description, bgimg }) => {
    return (
        <div className="w-72 bg-white card-shadow rounded-lg">
            <div className={`cardimg bg-black rounded-t-lg h-36 ${bgimg}`}></div>
            <div className="flex justify-center text-white flex-col">
                <div className="p-4">
                    <h5 className="text-black font-bold mb-2">{title}</h5>
                    <p className="text-black text-xs vgvalpo-textcolor6">{description}</p>
                    <div className="flex justify-between mt-4">
                        <Link to={'...'} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center'}>Ver más</Link>
                        <div className="flex justify-center items-center gap-1">
                            <img src={xbox} alt="" style={{width: '22px', height: '22px'}} />
                            <img src={nintendo} alt="" style={{width: '22px', height: '22px'}} />
                            <img src={playstation} alt="" style={{width: '22px', height: '22px'}} />
                            <img src={steam} alt="" style={{width: '22px', height: '22px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};