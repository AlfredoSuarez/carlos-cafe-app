import React from 'react';
import {Routes, Route} from 'react-router';
import Ordenes from './components/paginas/ordenes';
import Menu from './components/paginas/menu';
import NuevoPlatillo from './components/paginas/nuevoPlatillo';
import Sidebar from './components/ui/sidebar';




function App() {
  return (
  <div className="md:flex min-h-screen">
    <Sidebar/>
    <div className="md:w-3/5 xl:w-4/5 p-6">
    <Routes>
          <Route
           path="/"
            element = { <Ordenes/>} />

             <Route
           path="/menu"
            element = { <Menu/>} />

            <Route
           path="/nuevo-item"
            element = { <NuevoPlatillo/>} />
      </Routes>
    </div>
    
  </div>
    
  );
}

export default App;
