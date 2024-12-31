import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SuccessStories = ({ title, description, image, gameplataforms, info }) => {
    const [gamePlataforms, setGamePlataform] = useState([]);

    const AddPlataform = () => {
        setGamePlataform(gameplataforms);
    };

    useEffect(() => {
        AddPlataform();
    });

    return (
        <div className="flex justify-center items-center flex-col md:flex-row gap-5">
            <div className="p-4 md:w-3/12">
                <h5 className="text-black font-bold text-lg mb-2">{title}</h5>
                <p className="text-black text-sm vgvalpo-textcolor6 mb-2">{description}</p>
                <div className="flex gap-2">
                    <b className='font-bold vgvalpo-textcolor3'>Disponible en la plataforma:</b>
                    <div className="flex justify-center items-center gap-1">                                            
                    {
                        gamePlataforms.map((g) => (
                            <img src={g.name} alt="" style={{width: '25px', height: '25px'}} />
                        ))
                    }
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <Link to={info} className={'vgvalpo-bgcolor5 rounded-md px-6 text-sm py-2 flex justify-center items-center text-white'}>¡Ver más!</Link>
                </div>
            </div>
            <img src={image} alt="game-bg" className='rounded-lg' />
        </div>
    );
};