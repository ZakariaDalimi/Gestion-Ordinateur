import React, { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Navigate";

export default function Logout() {
    const nav = useNavigate();
    const { personne } = useContext(DataContext);

    return (
        <>
            <h1>Hello Email : {personne.email} Passwod :{personne.password}</h1>
            <button onClick={()=>{
                nav(-1)
            }}>Login</button>
        </>
    );
}





















// import { Link } from "react-router-dom";

// export default function Logout(){
//     return <>
//        <button><Link to='/'>Login</Link></button>
//     </>
// }