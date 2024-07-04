import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Inscription } from "./Inscription";
import Info from "./Info";
import Notfound from "./Notfound";
import { createContext, useState } from "react";

export const InfoContext = createContext({});

export default function Navigabiliter(){
    const [donner , setdonner] = useState({})
    const [utilisateur , setUtilisateur] = useState({})
    return <>
        <InfoContext.Provider value={{donner , setdonner , utilisateur , setUtilisateur}}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Inscription" element={<Inscription />}></Route>
                <Route path="/info" element={<Info />}></Route>
                <Route path="*" element={<Notfound />}></Route>
            </Routes>
        </BrowserRouter>
        </InfoContext.Provider>
    </>
}