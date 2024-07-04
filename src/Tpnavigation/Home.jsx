import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from "./Navigate";
import { Layout } from "./Layout";




export function Home(){
    return <>
        <Layout />
        <h1>Page home</h1>
    </>
}