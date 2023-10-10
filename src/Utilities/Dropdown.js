import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
export default function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    return(
        <>
            <div className="fixed bottom-0 right-0 m-4">
                <div className="relative inline-block text-center">
                    <button
                        onClick={toggleDropdown}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full py-5 px-6"
                    >
                        <FontAwesomeIcon icon={faBars} className=' text-lg'/>
                    </button>

                    {isOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            style={{ bottom: '100%' }} // Estilo CSS personalizado para desplegar hacia arriba
                        >

                        {/* Contenido del dropdown */}
                            <div className="py-1">
                                <Link to="/Home"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    POKEMON
                                </Link>

                                <Link to="/Machines"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    MACHINES
                                </Link>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    ITEMS
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    MOVES
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}