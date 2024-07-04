import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { createContext, useState } from "react";

export const DataContext = createContext({})

export default function Nav(){
    const [personne , setPersonne] = useState({})
    return <>
    <DataContext.Provider value={{ personne , setPersonne }}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/logout" element={<Logout />}/>
            </Routes>
        </BrowserRouter>
    </DataContext.Provider>
    </>
}