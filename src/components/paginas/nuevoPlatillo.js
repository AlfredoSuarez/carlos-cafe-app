import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup'

const NuevoPlatillo = () => {

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
    onSubmit: data =>{
      console.log(data)
    }

  })
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
                  />
              </div>

              <div className="mb-4">
                <label className="py-2 " htmlFor ="precio">Precio</label>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                   focus:outline-none focus:shadow-outline "
                   id ="precio"
                   type = "number"
                   placeholder = "$20"
                   min= "20"
                   value ={formik.values.precio}
                   onChange = {formik.handleChange}
                  />
              </div>

              <div className="mb-4">
                <label className="py-2 " htmlFor ="categoria">Categoria</label>
                 <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-outline "
                  id ="categoria"
                  name ="categoria"
                  value ={formik.values.categoria}
                  onChange = {formik.handleChange}
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
                  
                  />
              </div>
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