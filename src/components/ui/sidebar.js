import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
        <div className = "md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
            <p className="uppercase text-white text-center font-bold text-2xl tracking-wide">Antico Caffe</p>
           <nav className="mt-10">
               <NavLink className="p1 text-teal-300 block hover:text-blue-600 hover:text-indigo-100" activeClassName="text-yellow-500" to = "/menu">Menu</NavLink>
                <NavLink className="p1 text-teal-300 block hover:text-blue-600 hover:text-indigo-100" activeClassName="text-yellow-500" to = "/nuevo-item">Nuevo Platillo</NavLink>
           </nav>

            </div>
        </div>
        </>
      );
}
 
export default Sidebar;