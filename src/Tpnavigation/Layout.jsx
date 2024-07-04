import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "./Navigate";

export function Layout(){
    const home = useNavigate()
    const contact = useNavigate()
    const inscription = useNavigate()
    const info = useNavigate() 
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={()=>{
                    home('/')
                }}>
                    Home </button>
                </li>
                <li className="nav-item" >
                    <button className="nav-link btn btn-link" onClick={()=>{
                    contact('/Contact')
                }}>
                    Contact </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={()=>{
                    inscription('/inscription')
                }}>
                    Inscription</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={()=>{
                    info('/info')
                }}>
                        Info</button>
                    
                </li>
            </ul>
        </nav>
        
    </>
}