import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GameCard = ({ title, description, bgimg, link, gameplataforms }) => {
    const [gamePlataforms, setGamePlataform] = useState([]);

    const AddPlataform = () => {
        setGamePlataform(gameplataforms);
    };

    useEffect(() => {
        AddPlataform();
    });

    return (
        <div className="w-72 bg-white card-shadow rounded-lg">
            <div className={`cardimg bg-black rounded-t-lg h-36 ${bgimg}`}></div>
            <div className="flex justify-center text-white flex-col">
                <div className="p-4">
                    <h5 className="text-black font-bold mb-2">{title}</h5>
                    <p className="text-black text-xs vgvalpo-textcolor6">{description}</p>
                    <div className="flex justify-between mt-4">
                        <Link to={link} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center'}>Ver más</Link>
                        <div className="flex justify-center items-center gap-1">
                            {
                                gamePlataforms.map((p) => (
                                    <Link to={p.url}><img src={p.name} alt="" style={{width: '22px', height: '22px'}} /></Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};