import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListOrd from './ListOrd';
import AjouterOrdinateur from './AjouterOrdinateur';
import Notfound from '../Tpnavigation/Notfound';

export const dataContext = createContext({})

export default function Navigate() {
  const [laptop , setLaptop] = useState([])
  return (
    <dataContext.Provider value={{laptop , setLaptop}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AjouterOrdinateur />} />
        <Route path="/Ordinateur" element={<ListOrd />} />
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
    </dataContext.Provider>
  );
}
