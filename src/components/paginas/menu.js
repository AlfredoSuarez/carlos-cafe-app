import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom';
import {FirebaseContext} from '../../firebase';
import firebaseConfig from '../../firebase/config';
import Platillo from '../ui/Platillo';

const Menu = () => {

  //extraemos nuestro context de app.js firebase
  const {firebase} = useContext(FirebaseContext);
  //state de platillos
  const [platillos,setPlatillo] = useState([]);

//consultar la base de datos
  useEffect(() => {
    const obtenerPlatillos =  () =>{
      //consultamos nuestra firestorage
      //traemos los datos en tiempo real de firestore con snapshot
      firebase.db.collection('platillo').onSnapshot(handleSnapshot);
    }
     {
      obtenerPlatillos();
    }
  }, [])

  function handleSnapshot(snapshot) {
    const platillos = snapshot.docs.map(doc =>{
      return{
        id:doc.id,
        ...doc.data()
      }
    });
        //guardo los platillos en el state
        setPlatillo(platillos);
        console.log(platillos);
  }

    return (
        <>
        <h1 className ="text-3xl font-light mb-4">menu</h1>
        <Link  to="/nuevo-item" className="bg-teal-200 mt-2 inline-block ml-3 mb-5 p-2 uppercase font-bold">
        Nuevo Platillo
        </Link>
        { platillos.map( platillo =>(
          <Platillo
          key = {platillo.id}
          platillo = {platillo}
          />
          

        ))}

        </>
      );
}
 
export default Menu;