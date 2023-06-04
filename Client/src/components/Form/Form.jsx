import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const {name, value} = event.target; // { name:-, value:- }
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return (
       <div className={styles.background}>
            <form onSubmit={handleSubmit} >
                <label>EMAIL</label>
                <input 
                    type="text"
                    name="email"
                    value={userData.email} 
                    onChange={handleChange}
                />
                <p className={styles.error}>{errors.email ? errors.email : null}</p>
                <label>PASSWORD</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p className={styles.error}>{errors.password ? errors.password : null}</p>
                <button type="submit" >SUBMIT</button>
            </form>
       </div>
    );
 }