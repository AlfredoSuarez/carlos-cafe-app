import React from 'react'
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <h1 className ="text-3xl font-light mb-4">menu</h1>
        <Link  to="/nuevo-item" className="bg-teal-200 mt-2 inline-block ml-3 mb-5 p-2 uppercase font-bold">
        Nuevo Platillo
        </Link>

        </>
      );
}
 
export default Menu;