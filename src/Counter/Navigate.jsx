import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingCounter from "./Counters";
import Valshow from "./Valshow";
import { createContext, useState } from "react";

export const CountContext = createContext({})

export default function Navigated(){
    const [Count , setCount] = useState(0);
    return <>
        <CountContext.Provider value={{ Count , setCount }}>
        <BrowserRouter>
            <Routes>
                <Route index element={<SettingCounter />}></Route>
                <Route path="/val" element={<Valshow />}></Route>
            </Routes>
        </BrowserRouter>
        </CountContext.Provider>
    </>
}