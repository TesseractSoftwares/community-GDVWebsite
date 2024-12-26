import Logo from '../img/logo-Photoroom.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOption, setIsOpenOption] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleOption = () => {
        setIsOpenOption(!isOpenOption);
    };

    return (
        <div className="NavbarComponent sticky top-0 z-10 w-full">
            <nav className="vgvalpo-bgcolor1 px-6 py-5">
                <div className="px-8 mx-auto flex justify-between items-center">
                    <img src={Logo} alt="" className='w-14' />

                    <div className="hidden md:flex md:justify-center md:items-center space-x-10">
                        <Link to={'/'} className="text-white vg-link">Inicio</Link>
                        <button onClick={toggleOption} className="text-white">
                            Gremio <i className="bi bi-chevron-down text-xs ml-1"></i>
                        </button>
                        {
                            isOpenOption && (
                                <div className="absolute rounded-b-md z-30 w-44 top-20 mt-2 right-96 flex flex-col justify-center vgvalpo-bgcolor1 my-border-top">
                                    <Link to={'/aboutus'} className="text-white p-4 vg-link">Sobre nosotros</Link>
                                    <Link to={'...'} className="text-white p-4 vg-link">Nuestros socios</Link>
                                </div>
                            )
                        }
                        <Link to={'/videogames'} className="text-white vg-link">Videojuegos</Link>
                        <Link to={'...'} className="text-white vg-link">Contacto</Link>
                        <Link to={'...'} className={'vgvalpo-gradient rounded-md px-6 py-3 flex justify-center items-center text-white'}>Membresía</Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            <i className="bi bi-list text-white text-3xl"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden absolute z-20 w-full vgvalpo-bgcolor1 p-4 px-6 my-border-top my-border-bottom">
                    <Link to={'/'} className="text-white py-4 block vg-link">Inicio</Link>
                    <button onClick={toggleOption} className="text-white py-4 block w-full text-left">
                        Gremio <i className="bi bi-chevron-down text-xs ml-1"></i>
                    </button>
                    {
                        isOpenOption && (
                            <div className="md:hidden z-20 w-full vgvalpo-bgcolor1 px-4 py-2 my-border rounded-md">
                                <Link to={'/aboutus'} className="text-white py-4 block vg-link">Sobre nosotros</Link>
                                <Link to={'...'} className="text-white py-4 block vg-link">Nuestros socios</Link>
                            </div>
                        )
                    }
                    <Link to={'/videogames'} className="text-white py-4 block vg-link">Videojuegos</Link>
                    <Link to={'...'} className="text-white py-4 mb-4 block vg-link">Contacto</Link>
                    <Link to={'...'} className={'vgvalpo-gradient rounded-md px-6 py-3 flex justify-center items-center w-40 mb-4 text-white'}>Membresía</Link>
                </div>
            )}  
        </div>
    );
};

