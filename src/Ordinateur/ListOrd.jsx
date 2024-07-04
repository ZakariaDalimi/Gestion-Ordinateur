import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { dataContext } from './Navigate';

const Titleh1 = styled.h1`
  text-align: center;
  font-family: 'Times New Roman';
`;

const ButtonAjouter = styled.button`
  background-color: blue;
  color: white;
  border-radius: 6px;
  border: 2px solid blue;
  width: 12%;
`;

export default function ListOrd() {
      const {laptop , setLaptop} = useContext(dataContext)

      const [prod, setProd] = useState([
        { id: 1, marque: 'hp', model: 2022, ram: '8GB', processeur: 'proc1', prix: 4000 },
        { id: 2, marque: 'lenovo', model: 2018, ram: '4GB', processeur: 'proc2', prix: 2000 },
      ]);

      useEffect(() => {
        setProd([...prod , ...laptop]);
      }, [laptop]);

      const navigate = useNavigate();

      const handleclick = () => {
        navigate('/');
      };

  return (
    <>
      <Titleh1>Liste des Ordinateurs</Titleh1>
      {prod.map((pc) => (
        <div className="container mt-5" key={pc.id} onClick={()=>{
            const filterprod = prod.find(item => item.id === pc.id) 
            alert(`
                 marque is : ${filterprod.marque}
                 model is : ${filterprod.model}
                 processeur is : ${filterprod.processeur}
                 price is : ${filterprod.prix}
            `)
        }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">{pc.marque}</h3>
                  <h5 className="card-text">{pc.ram}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ButtonAjouter onClick={handleclick}>Ajouter</ButtonAjouter>
    </>
  );
}



















