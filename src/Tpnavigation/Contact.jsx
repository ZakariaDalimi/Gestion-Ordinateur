import styled from "styled-components";
import { Layout } from "./Layout";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "./Navigate";

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

export function Contact() {
    const [rendervous , setRendeVous] = useState({
        username : 'user',
        email : 'user@gmail.com',
        message : 'send message'
    })

    const {donner , setdonner} = useContext(InfoContext);

    const navigate = useNavigate()

    const handleChange=(e)=>{
        const {name , value} = e.target;
        setRendeVous({
            ...rendervous ,
            [name] : value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setdonner({
            username : rendervous.username,
            email : rendervous.email,
            message : rendervous.message
        })
        navigate('/Info')
    }

    return (
        <>
            <Layout />
            <GlobalDiv>
                <div>
                    <h1>Contacter Nous</h1>
                    <ContactForm onSubmit={handleSubmit}>
                        <InputField type="text" name="username" placeholder="User Name" onChange={handleChange}/>
                        <InputField type="text" name="email" placeholder="email" onChange={handleChange}/>
                        <TextAreaField name="message" cols="60" rows="5" placeholder="Message" onChange={handleChange}></TextAreaField>
                        <SubmitButton type="submit" value="Send" />
                    </ContactForm>
                </div>
            </GlobalDiv>
        </>
    );
}
