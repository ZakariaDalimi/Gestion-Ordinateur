import { useContext } from "react"
import { CountContext } from "./Navigate"
import { useNavigate } from "react-router-dom"

export default function Valshow(){
    const {Count} = useContext(CountContext)
    const navigate = useNavigate();
    const handlesubmit=()=>{
        navigate('/')
    }
    return <>
        <h1 data-testid='value'>counter is {Count}</h1>
        <button onClick={handlesubmit}>Retour</button>
    </>
}