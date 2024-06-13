import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const Secret = () => {
    const navigate =useNavigate();
    const[userdata,setUserdata]=useState({});
    const callAboutpage = async () => {
       
        try {
            const res = await fetch("http://localhost:4000/secret", {
                method: "GET",
                headers: {

                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const data =await res.json();
            console.log(data);
            setUserdata(data);
            
            if(res.status!==200){
                const error =new Error(res.error);
                throw error;
            }

            }
         catch (e) {
            console.log(e);
            navigate("/about");
        
        }
    }
    useEffect(() => {

        callAboutpage();

    }, []);
    return (
        <div>
            <h2>HELLO  IAM SECRET PAGE</h2>
            name:{userdata.name};<br/>
            email:{userdata.email};<br/>
            password:{userdata.confirmpassword};<br/>
        </div>
    )
}

export default Secret;
