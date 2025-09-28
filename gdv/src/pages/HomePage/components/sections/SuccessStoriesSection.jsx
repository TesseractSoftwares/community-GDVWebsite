import { SuccessStories } from "../../../../components/SuccessStories";
import { gamesData } from '../../../../data/gamesData';

import xbox from '../../../../img/plataforms/xbox.png'
import nintendo from '../../../../img/plataforms/nintendo.png'
import steam from '../../../../img/plataforms/steam.png'
import playstation from '../../../../img/plataforms/playstation.png'

import Gameimg1 from '../../../../img/TormentedSouls_header.jpg'
import Gameimg2 from '../../../../img/Colorbound_header.jpg'

export const SuccessStoriesSection = () => {
    const successStories = [
            {
                title: 'Tormented Souls, the comeback of classic survival horror',
                description: 'Codeveloped by Dual Effect and Abstract Digital and published by Pqube, Tormented Souls has sold over half a million copies worldwide and has become a classic survival horror indie game. The game was completely developed in Valparaíso, including all console versions.',
                image: Gameimg1,
                info: 'https://pqube.co.uk/games/tormented-souls/',
                plataforms: [
                    {name: xbox, url: '...'},
                    {name: nintendo, url: '...'},
                    {name: playstation, url: '...'},
                    {name: steam, url: 'https://store.steampowered.com/app/1367590/Tormented_Souls/'}
                ]
            },
            {
                title: 'Colorbound, from game jam to market!',
                description: 'Colorbound is a game being developed by Panpipe Studio and published by Whitethorn Games, it won first place the Latin American Games Showcase Game Jam of 2025 with the name Fade. After winning, the game went on to sign a deal with Whitethorn Games and is coming out in 2026!',
                image: Gameimg2,
                info: 'https://store.steampowered.com/app/3778610/Colorbound/',
                plataforms: [
                    {name: steam, url: 'https://store.steampowered.com/app/3778610/Colorbound/'}
                ]
            }
    ];

    return (
        <section className='py-20 px-4 games-bg'>
            <div className="mb-12 flex flex-col justify-center items-center text-center">
                <h6 className="mb-2 vgvalpo-textcolor3 text-base">— Success stories —</h6>
                <h3 className="font-bold text-black md:text-3xl md:w-4/12 text-2xl">Success stories that put Valparaíso as an important player in game development!</h3>
            </div>
        
            <div className="flex justify-center items-center flex-col gap-16">
                {
                    successStories.map((s, index) => (
                        <SuccessStories key={index} title={s.title} description={s.description} image={s.image} gameplataforms={s.plataforms} info={s.info} />
                    ))
                }
            </div>
        </section>
    )
};
