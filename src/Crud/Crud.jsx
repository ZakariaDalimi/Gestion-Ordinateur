import { useState } from "react"

export default function Crud(){
    const [Alluser , setAllUser] = useState([
        {id : 1 , nom : "Mehdi" , prenom : "Dafraoui" , ville : "Casablanca"},
        {id : 2 , nom : "amine" , prenom : "salhi" , ville : "rabat"},
    ])
    const [user , setUser] = useState({
        id : Alluser.length + 1 ,
        nom : "",
        prenom : "",
        ville : ""
    })

    const hanldeChange=(e)=>{
        e.preventDefault()
        setUser({
            ...user ,
            id : Alluser.length + 1,
            [e.target.name] : e.target.value
        })
    }

    const handleEnregistrer=(e)=>{
        e.preventDefault()
        const newArr = user
        setAllUser([...Alluser , newArr])
        setUser({
            id: Alluser.length + 2, 
            nom: "",
            prenom: "",
            ville: "Casablanca", 
        });
    }

    const handleClear=(e)=>{
        e.preventDefault()
        setUser({
            ...user ,
            nom : "",
            prenom : "",
            ville : ""
        })
    }

    const handleSupprimer=(id)=>{
        const updatedUsers = Alluser.filter((user) => user.id != id); // Filtering out user to delete
        setAllUser(updatedUsers);
    }

    const handleModifier=(id)=>{
        const userModifier = Alluser.find(item => item.id === id)
        setUser(userModifier)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedUsers = Alluser.map((item) =>
            item.id === user.id ? user : item
        );
        setAllUser(updatedUsers);
    };

    const handleFilter=(e)=>{
        e.preventDefault()
        const ville = e.target.value;
        const filteritems = Alluser.filter((user) => user.ville === ville)
        setAllUser(filteritems)
    }

    return <>
        <h1>Crud</h1>
        <form>
            <label>firstName : </label>
            <input type="text" name="nom" value={user.nom} onChange={hanldeChange}/>
            <label>lastName : </label>
            <input type="text" name="prenom" value={user.prenom} onChange={hanldeChange}/>
            <label>Ville : </label>
            <select name="ville" value={user.ville} onChange={hanldeChange}>
                <option value="casablance" selected>casablance</option>
                <option value="agadir">agadir</option>
                <option value="rabat">rabat</option>
                <option value="tanger">tanger</option>
            </select>
            <button onClick={handleEnregistrer}>Enregistrer</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleClear}>Clear</button>
        </form>
        <form>
            <label>Filtrer par ville : </label>
            <select name="ville" onChange={handleFilter}>
                <option value="Casablanca" selected>Casablanca</option>
                <option value="agadir">agadir</option>
                <option value="rabat">rabat</option>
                <option value="tanger">tanger</option>
            </select>
        </form>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Ville</th>
                    <th>Edite</th>
                </tr>
            </thead>
        {
            Alluser.map((personne , key)=>(
                    <tbody key={key}>
                    <tr>
                        <td>{personne.id}</td>
                        <td>{personne.nom}</td>
                        <td>{personne.prenom}</td>
                        <td>{personne.ville}</td>
                        <td>
                            <button onClick={()=>handleModifier(personne.id)}>Modifier</button>
                            <button onClick={()=>handleSupprimer(personne.id)}>Supprimer</button>
                        </td>
                    </tr>
                    </tbody>
            ))
        }
        </table>
    </>
}









