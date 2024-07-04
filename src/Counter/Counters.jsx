import { useContext, useState } from "react"
import { CountContext } from "./Navigate"
import { useNavigate } from "react-router-dom"

export default function SettingCounter(){
    const {Count , setCount} = useContext(CountContext)
    const navigate = useNavigate();
    let handleSubmitIncriment=(e)=>{
        e.preventDefault()
        setCount(Count + 1)
        navigate('/val')
    }

    let handleSubmitDecriment=(e)=>{
        e.preventDefault()
        setCount(Count - 1)
        navigate('/val')
    }
    return <>
        <button onClick={handleSubmitIncriment}>Incriment</button>
        <button onClick={handleSubmitDecriment}>Decriment</button>
    </>
}