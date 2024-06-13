import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Appcontext } from './Auth';
import {  toast } from 'react-toastify';


const Login = () => {
const {setJwt}=useContext(Appcontext);
  
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""


    });
    const handelInput = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value

        });

    }
    const navigate =useNavigate();
    const handelonSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user),

            });
            
            
            
            if(response.ok){
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: ""
                });
               
                navigate("/about");
            }
            else{
                const rdata =await response.json();
                
                console.log(`res from backend   ${rdata.extradetails || rdata.message }`);
        
                window.alert(rdata.extradetails || rdata.message);
                
            }
        } catch (e) {
            console.log(e);

        }
    }
    return (
        <div>
            iam 
            <form method="POST" onSubmit={handelonSubmit}>
                <input type="text" placeholder="name"
                    value={user.username}
                    onChange={handelInput}
                    name="name" />
                <input type="text" placeholder="name"
                    value={user.email}
                    onChange={handelInput} name="email" />
                <input type="text" placeholder="name"
                    value={user.password}
                    onChange={handelInput} name="password" />
                <input type="text" placeholder="name"
                    value={user.confirmpassword}
                    onChange={handelInput} name="confirmpassword" />

                <input type="submit" placeholder="submit" />
            </form>
        </div>
    )
}

export default Login
