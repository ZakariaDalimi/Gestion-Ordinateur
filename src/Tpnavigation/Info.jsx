import React, { useContext, useState } from "react";
import { Layout } from "./Layout";
import { InfoContext } from "./Navigate";

export default function Info() {
    const { donner, utilisateur } = useContext(InfoContext);

    const [newarr, setNewarr] = useState([
        { username: 'midoo', firstname: 'Mehdi', lastname: 'Dafraoui', email: 'dafrex@gmail.com', dateNaissace: '2005-03-11', mess: 'first Message into you' },
        { username: 'amn', firstname: 'amine', lastname: 'salhi', email: 'amine@gmail.com', dateNaissace: '2003-11-17', mess: 'seconde Message into you' }
    ]);

    const handleUpdateInfo = () => {
        if (donner.email === utilisateur.email) {
            const newUser = {
                username: donner.username,
                firstname: utilisateur.firstname,
                lastname: utilisateur.lastname,
                email: utilisateur.email,
                dateNaissace: utilisateur.dateNaissance,
                mess: donner.message
            };

            setNewarr(prevArr => [...prevArr, newUser]);
        } else {
            alert('Nooooo');
        }
    };

    return (
        <>
            <Layout />
            <h1>Mes Info : </h1>
            <button onClick={handleUpdateInfo}>Update Info</button>
            {newarr.map((value, index) => (
                <div key={index} className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">User Information</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Username:</strong> {value.username}</li>
                            <li className="list-group-item"><strong>Email:</strong> {value.email}</li>
                            <li className="list-group-item"><strong>Message:</strong> {value.mess}</li>
                            <li className="list-group-item"><strong>Date of Birth:</strong> {value.dateNaissace}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}
