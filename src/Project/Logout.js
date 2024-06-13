import React, { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Appcontext } from './Auth';
import {  toast } from 'react-toastify';
import Cookie from 'js-cookie';


const Logout = () => {
  const{setJwt}=useContext(Appcontext);

  const navigate = useNavigate();
  const logoutpage = async () => {

    try {
      const res = await fetch("http://localhost:4000/secrets", {
        method: "GET",
        headers: {

          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",

      });
      const data =await res.json();
      console.log(data);
      if(data){
        setJwt("");
        Cookie.remove('jwt');
        
        
      }
     
           
      

    }
    catch (e) {
      console.log(e);
      navigate("/");

    }
  };
  useEffect(() => {

    logoutpage();

  },[]);

  return (
    <div>
      <h1>HELLO i'am logout page</h1>
    </div>
  )
}

export default Logout

