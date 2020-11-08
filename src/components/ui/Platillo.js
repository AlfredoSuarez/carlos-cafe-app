import React, { useContext, useRef } from 'react';
import { FirebaseContext } from '../../firebase';

export default function Platillo({platillo}) {
    //useRef para acceder a los valores del DOM
    // Existencia ref para acceder al valor directamente
    const existenciaRef = useRef(platillo.existencia);

    // context de firebase para cambios en la BD
    const { firebase } = useContext(FirebaseContext)

    const {id,nombre,imagen,categoria,precio,existencia,descripcion} = platillo;

      // modificar el estado del platillo en firebase
      const actualizarDisponibilidad = () => {
          //evaluar string true que debe devolver un boolean   true return true false return false
        const existencia = (existenciaRef.current.value === "true");
 
        try {
            firebase.db.collection('platillo')
                .doc(id)
                .update({
                    existencia
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full  px-3 mb-4">
           <div className="p-5 shadow-md bg-white">
               <div className="lg:flex">
                   <div className="lg:w-5/12 xl:w-3/12">
                       <img src={imagen} alt="image"/>
                       <div className="sm:flex sm:-mx-2 pl-2">
                            <label className="block mt-5 sm:w-2/4">
                                <span className="block text-gray-800 mb-2 " >Existencia</span>

                                <select 
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    value={existencia}
                                    ref={existenciaRef}
                                    onChange={ () => actualizarDisponibilidad() }
                                >
                                    <option value="true">Disponible</option>
                                    <option value="false">No Disponible</option>
                                </select>
                            </label>
                        </div>
                    </div>
                       <div className="lg:w-7/12 xl:w-9/12">
                             <p className="text-2xl text-black ml-3">{nombre}</p>
                             <p 
                             className="text-2xl text-black-600 ml-3">Categoria:
                             <span className="text-xl text-blue-700 font-bold ml-3">{categoria.toUpperCase()}</span>
                             </p>
                             <p 
                             className="text-2xl text-black-600 ml-3">Precio:
                             <span className="text-xl text-blue-700 font-bold ml-3">$ {precio}</span>
                             </p>
                             <p className="text-2xl text-gray-600 font-serif ml-3">{descripcion}</p>
                            
                       </div>
                  
               </div>
           </div>
        </div>
    )
}
