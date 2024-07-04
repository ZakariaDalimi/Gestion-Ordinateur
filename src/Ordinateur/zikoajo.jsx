import React, { useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLaptopContext } from "./LaptopContext";


export default function Ajouter() {
  const { addLaptop } = useLaptopContext();
  const [modelValue, setModelValue] = useState("");
  const [processeurValue, setProcesseurValue] = useState("");
  const [ramValue, setRamValue] = useState("");

  
  const Container = styled.div`
    margin: 20px;
    width: 40%;
  `;

  const Title = styled.h2`
    color: #333;
    font-size: 24px;
  `;

  const StyledForm = styled.form`
    margin-top: 10px;
  `;

  const Label = styled.label`
    display: block;
    margin-bottom: 5px;
  `;

  const TextInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

  const SubmitButton = styled.input`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  `;

  const CancelButton = styled.button`
    padding: 10px 20px;
    background-color: #ccc;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

  const ajouterLaptop = () => {

    const newLaptop = {
      model: modelValue,
      processeur: processeurValue,
      ram: ramValue
    };

    addLaptop(newLaptop);
    
  };

  return (
    <>
      <Container>
        <Title>Ajouter un nouvel ordinateur :</Title>
        <StyledForm>
          <Label htmlFor="model">Model :</Label>
          <TextInput
            type="text"
            id="model"
            value={modelValue}
            onChange={(e) => setModelValue(e.target.value)}
            required
          />

          <Label htmlFor="processeur">Processeur :</Label>
          <TextInput
            type="text"
            id="processeur"
            value={processeurValue}
            onChange={(e) => setProcesseurValue(e.target.value)}
            required
          />

          <Label htmlFor="ram">RAM :</Label>
          <TextInput
            type="text"
            id="ram"
            value={ramValue}
            onChange={(e) => setRamValue(e.target.value)}
            required
          />

          <SubmitButton type="button" value="Valider" onClick={ajouterLaptop} />

          <CancelButton type="button" value="Valider">
            <Link to="/">Annuler</Link>
          </CancelButton>
        </StyledForm>
      </Container>
    </>
  );
}