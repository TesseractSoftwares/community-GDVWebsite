import steam from '../img/plataforms/steam.png';

// Platform objects for itch.io games
const itchIo = { name: steam, url: '' }; // Using steam icon for itch.io games

// Centralized games data for the entire website
export const gamesData = [
    {
        title: 'Tormented Souls',
        description: 'Classic survival horror is back! Inspired by the original Resident Evil and Alone in the Dark series, Tormented Souls modernises with a fresh twist on the fixed perspective adventure - as Caroline Walker investigates the mysterious disappearance of twin girls in a terrifying mansion-turned-hospital.',
        image: 'bg-tormented-souls',
        link: 'https://pqube.co.uk/games/tormented-souls/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/1367590/Tormented_Souls/'}
        ]
    },
    {
        title: 'Colorbound',
        description: 'In Colorbound, color is more than just hue. As Anku, an Aymara boy with a unique gift, you\'ll harness the power of color to shape the environment itself, uncovering hidden paths to navigate challenging and complex puzzles.',
        image: 'bg-colorbound',
        link: 'https://store.steampowered.com/app/3778610/Colorbound/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/3778610/Colorbound/'}
        ]
    },
    {
        title: 'Aura: Echoes of Pain',
        description: 'A beautiful narrative 2D puzzle platforming journey of self discovery. The world was bright and full of life, but is now dark and barren. Travel across a desolated land to find meaning through memories of a better time, when life was happier and uncover the secret that brought darkness to the land.',
        image: 'bg-aura-echoes',
        link: 'https://store.steampowered.com/app/4006440/Aura_Echoes_of_Pain/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/4006440/Aura_Echoes_of_Pain/'}
        ]
    },
    {
        title: 'Arm Around!',
        description: 'You are an arm. Yes, seriously, just a disembodied arm. And to be it you have to use your mouse. Oh, and everything is physics based. If it sounds hard it\'s because it is. Drag, jump, punch and arm around to... wait, what kind of a mission could a disembodied arm possibly have?',
        image: 'bg-arm-around',
        link: 'https://store.steampowered.com/app/3072400/Arm_Around/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/3072400/Arm_Around/'}
        ]
    },
    {
        title: 'Spellrain',
        description: 'Survive the spellrain disaster that has turned the world into a magical land filled with cute monsters. Buy spells, craft armor and upgrade your base to restore peace in SPELLRAIN',
        image: 'bg-spellrain',
        link: 'https://store.steampowered.com/app/2242440/SPELLRAIN/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/2242440/SPELLRAIN/'}
        ]
    },
    {
        title: 'Astral Rot',
        description: 'Astral Rot is a fixed camera, survival horror sci-fi game by the co-creators of Tormented Souls. You play as Adler, a space mining engineer, that will have to face impossible choices in order to save his brother and anyone in the asteroid that hasn\'t been infected by the Stardust Disease.',
        image: 'bg-astral-rot',
        link: 'https://store.steampowered.com/app/2474170/Astral_Rot',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/2474170/Astral_Rot'}
        ]
    },
    {
        title: 'Mix the Forgotten',
        description: 'A narrative puzzle crafting adventure set in a world where everyone and everything is something. Through Mix the Forgotten\'s surreal adventure you\'ll befriend everyone you can with the power of crafting and help them find meaning and move on to an unknown destination.',
        image: 'bg-mix-forgotten',
        link: 'https://store.steampowered.com/app/2373720/Mix_the_Forgotten/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/2373720/Mix_the_Forgotten/'}
        ]
    },
    {
        title: 'Bulbo\'s Belief System',
        description: 'Bulbo\'s Belief System is a puzzle-platformer where knowledge is both a tool and an obstacle. Bulbo believes everything he\'s told, letting him see, move, and interact, but he can forget! Erase walls from existence, ignore gravity and manage conflicting beliefs to solve cute mind-bending challenges.',
        image: 'bg-bulbo-belief',
        link: 'https://store.steampowered.com/app/3549280/Bulbos_Belief_System/',
        platforms: [
            {name: steam, url: 'https://store.steampowered.com/app/3549280/Bulbos_Belief_System/'}
        ]
    },
    {
        title: 'Spoonfool Keep your Cool',
        description: 'The Sun is getting closer to the Earth, so it\'s up to Spoonfool to restore it to its original position! Can they do it? And could they collect all the Moons?',
        image: 'bg-spoonfool',
        link: 'https://outfind.itch.io/spoonfool-keep-your-cool',
        platforms: [
            {name: steam, url: 'https://outfind.itch.io/spoonfool-keep-your-cool'}
        ]
    },
    {
        title: 'Lilly & Willy',
        description: 'Lilly & Willy is a platformer about two sibling mice trying to escape from a lab full of traps and dangers — but only if they coordinate their moves!',
        image: 'bg-lilly-willy',
        link: 'https://outfind.itch.io/lilly-and-willy',
        platforms: [
            {name: steam, url: 'https://outfind.itch.io/lilly-and-willy'}
        ]
    },
    {
        title: 'Frogward',
        description: 'You\'re a frog that has to keep moving to avoid being eaten by a crocodile! Hop across lily pads and platforms, use your tongue to launch yourself, and find the best route to escape the scary croc.',
        image: 'bg-frogward',
        link: 'https://outfind.itch.io/frogward',
        platforms: [
            {name: steam, url: 'https://outfind.itch.io/frogward'}
        ]
    }
];

// Utility function to shuffle games array to be fair to all games
export const getShuffledGames = (games = gamesData, numberOfGames = games.length) => {
    const shuffled = [...games].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numberOfGames);
};
