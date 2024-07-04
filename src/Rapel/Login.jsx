import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Navigate";

export default function Login() {
    const nav = useNavigate();

    const { personne , setPersonne } = useContext(DataContext)

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonne({ ...user });
        nav(`/logout`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email"  onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Enter your password"  onChange={handleChange} /><br />
                <input type="submit" value="Logout" />
            </form>
        </>
    );
}













// import { Link } from "react-router-dom";

// export default function Login(){
//     return <>
//         <button><Link to='/logout'>Logout</Link></button>
//     </>
// }