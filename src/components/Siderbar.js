import React from 'react';
import './Siderbar.css';
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { GiHandTruck } from "react-icons/gi";
import { FaBoxesPacking } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";

const Siderbar = () => {
    return (
        <div className='menuBar'>
                <ul>
                    <li>
                        <a href='#home'><FaUsers size={20}/>  Gestión de usuarios</a>
                    </li>
                    <li><a href='#home'><FaUsersCog size={20}/>     Gestión de roles</a>
                    </li>
                    <li>
                        <a href='#home'><GiHandTruck size={20}/>    Gestión de distribuidores</a>
                    </li>
                    <li>
                        <a href='#home'><FaBoxesPacking size={20}/>     Gestión de pedidos</a>
                    </li>
                    <li>
                        <a href='#home'><MdInventory2 size={20}/>       Gestión de inventario</a>
                    </li>
                    <li>
                        <a href='#home'><GrCatalog size={20}/>      Gestión de catalogo</a>
                    </li>
                </ul>
        </div>
    );
};

export default Siderbar;