import { useContext } from "react";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InfoContext } from "./Navigate";
import styled from "styled-components";


const GlobalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DivPic = styled.div`
    margin-right: 20px;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputField = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const TextAreaField = styled.textarea`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.input`
    padding: 5px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


export function Inscription(){
    const [user , setUser] = useState({
        firstname : '',
        lastname : '',
        email : '',
        dateNaissance: ''
    })

    const {utilisateur , setUtilisateur} = useContext(InfoContext);

    const navigate = useNavigate()

    const handleChangeInscription=(e)=>{
        const {name , value} = e.target;
        setUser({
            ...user ,
            [name] : value
        })
    }

    const handleSubmitInscription=(e)=>{
        e.preventDefault()
        setUtilisateur({
            firstname : user.firstname,
            lastname : user.lastname,
            email : user.email,
            dateNaissance: user.dateNaissance
        })
        navigate('/Contact')
    }
    return <>
        <Layout />
        <h1>forms Inscription : </h1>
        <GlobalDiv>
                <div>
                    <h1>Contacter Nous</h1>
                    <ContactForm onSubmit={handleSubmitInscription}>
                        <InputField type="text" name="firstname" placeholder="firstname" onChange={handleChangeInscription}/>
                        <InputField type="text" name="lastname" placeholder="lastname" onChange={handleChangeInscription}/>
                        <InputField type="text" name="email" placeholder="email" onChange={handleChangeInscription}/>
                        <InputField type="text" name="dateNaissance" placeholder="dateNaissance" onChange={handleChangeInscription}/>
                        <SubmitButton type="submit" value="Send" />
                    </ContactForm>
                </div>
            </GlobalDiv>
    </>
}