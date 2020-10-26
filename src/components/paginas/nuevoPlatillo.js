import React, {useContext} from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {FirebaseContext} from '../../firebase';

import { useNavigate } from 'react-router-dom';

const NuevoPlatillo = () => {
  //context con las operaciones de firebase
  //use context nos permite compartir daros a travez de componentes sin usar props
  const {firebase} = useContext(FirebaseContext);
  //verificar en consola lo siguiente para saber si esta bien configurado Firebase {db: e}

  //console.log(firebase);

  //hook para redireccionar
  const navigate = useNavigate();
  

  //envio de datos y leer datos
  const formik = useFormik({
    initialValues:{
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      descripcion: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
                        .min(3, 'Los Platillos deben tener al menos 3 caracteres')
                        .required('El Nombre del platillo es obligatorio'),
            precio: Yup.number()
                        .min(1, 'Debes agregar un número')
                        .required('El Precio es obligatorio'),
            categoria: Yup.string()
                        .required('La categoría es obligatoria'),
            descripcion: Yup.string()
                        .min(10, 'La descripción debe ser más larga')
                        .required('La descripción es obligatoria'),
                
    }),
    onSubmit: platillo =>{
      try {
      // console.log(platillo)
       platillo.existencia = true;
       firebase.db.collection('platillo').add(platillo);
       // Redireccionar
       navigate('/menu');
      } catch (error) {
        console.log(error);
      }
     
    }

  });
    return (
        <>
        <h1 className ="text-3xl font-light mb-4">Agregar Platillo</h1>
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl">
            <form onSubmit = {formik.handleSubmit}>
              <div className="mb-4">
                <label className="py-2 " htmlFor ="nombre">Nombre</label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                   focus:outline-none focus:shadow-outline "
                   id ="nombre"
                   type = "text"
                   placeholder = "Nombre platillo"
                   value ={formik.values.nombre}
                   onChange = {formik.handleChange}
                   onBlur={formik.handleBlur}
                  />
              </div>
              { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                        ) : null }

              <div className="mb-4">
                <label className="py-2 " htmlFor ="precio">Precio</label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                   focus:outline-none focus:shadow-outline "
                   id ="precio"
                   type = "number"
                   placeholder = "$20"
                   value ={formik.values.precio}
                   onChange = {formik.handleChange}
                   onBlur={formik.handleBlur}
                  />
              </div>

              { formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.precio} </p>
                            </div>
                        ) : null }

              <div className="mb-4">
                <label className="py-2 " htmlFor ="categoria">Categoria</label>
                 <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-outline "
                  id ="categoria"
                  name ="categoria"
                  value ={formik.values.categoria}
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                 >
                   <option value="">--Seleccionar--</option>
                   <option value="desayuno">Desayuno</option>
                   <option value="postres">Postres</option>
                   <option value="entradas">Entradas</option>
                   <option value="bebidas">Bebidas</option>
                   <option value="ensaladas">Ensaladas</option>
                   <option value="sandwich">Sandwich</option>

                 </select>
              </div>

              { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.categoria} </p>
                            </div>
                        ) : null }

              <div className="mb-4">
                <label className="py-2 " htmlFor ="imagen">Imagen</label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                   focus:outline-none focus:shadow-outline "
                   id ="imagen"
                   type = "file"
                   value ={formik.values.imagen}
                   onChange = {formik.handleChange}
                  />
              </div>

              <div className="mb-4">
                <label className="py-2 " htmlFor ="descripcion">Descripcion</label>
                  <textarea
                  className=" h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                   focus:outline-none focus:shadow-outline "
                   id ="descripcion"
                   value ={formik.values.descripcion}
                   onChange = {formik.handleChange}
                   onBlur={formik.handleBlur}
                  
                  />
              </div>
              { formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.descripcion} </p>
                            </div>
                        ) : null }

                        
              <input
              type = "submit"
              className="bg-gray-700 uppercase font-bold w-full mt-5 p-2 text-white"
              value="Guardar"
              />
            </form>
          </div>

        </div>

        </>
      );
}
 
export default NuevoPlatillo;