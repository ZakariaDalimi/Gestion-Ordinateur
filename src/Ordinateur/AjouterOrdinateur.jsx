import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { dataContext } from './Navigate';

const Titleh1 = styled.h1`
  text-align: center;
`;

export default function AjouterOrdinateur() {
      const handlemarque = useRef();
      const handlemodel = useRef();
      const handleram = useRef();
      const handleprocesseur = useRef();
      const handleprix = useRef();

      const [Ordinateur, setOrdinateur] = useState({
            id: 2,
            marque: '',
            model: '',
            ram: 0,
            processeur: '',
            prix: '',
      });

  const navigate = useNavigate();

  const {laptop , setLaptop} = useContext(dataContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const mar = handlemarque.current.value;
    const mod = handlemodel.current.value;
    const rm = handleram.current.value;
    const proc = handleprocesseur.current.value;
    const price = handleprix.current.value;

    const newOrdianteur = {
      id: Ordinateur.id + 1,
      marque: mar,
      model: mod,
      ram: rm,
      processeur: proc,
      prix: price,
    };



    setLaptop([...laptop, newOrdianteur]);

    setOrdinateur({
      id: Ordinateur.id + 1,
      marque: '',
      model: '',
      ram: 0,
      processeur: '',
      prix: '',
    });

    handlemarque.current.value = '';
    handlemodel.current.value = '';
    handleram.current.value = '';
    handleprocesseur.current.value = '';
    handleprix.current.value = '';

    navigate(`/Ordinateur`);
  };

  return (
    <>
      <Titleh1>Ajouter Ordinateur</Titleh1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="marque">Marque:</label>
          <input type="text" className="form-control" id="marque" name="marque" ref={handlemarque} />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input type="text" className="form-control" id="model" name="model" ref={handlemodel} />
        </div>
        <div className="form-group">
          <label htmlFor="ram">RAM:</label>
          <input type="text" className="form-control" id="ram" name="ram" ref={handleram} />
        </div>
        <div className="form-group">
          <label htmlFor="processeur">Processeur:</label>
          <input type="text" className="form-control" id="processeur" name="processeur" ref={handleprocesseur} />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix:</label>
          <input type="text" className="form-control" id="prix" name="prix" ref={handleprix} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};





