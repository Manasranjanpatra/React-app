import React, { useContext, useState } from 'react'
import { Appcontext } from './Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';



const About = () => {
  const { setJwt } = useContext(Appcontext);
  const navigate = useNavigate();



  const [login, setLogin] = useState({

    email: "",
    password: ""
  });


  const handleclick = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setLogin({
      ...login,
      [name]: value

    });

  }
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const ressponse = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",

        body: JSON.stringify(login),

      });





      console.log(ressponse);
      if (ressponse.ok) {
        toast.success("SUCESSFULLY");
        setLogin({

          email: "",
          password: "",

        });
        setJwt(Cookie.get('jwt'));
        navigate("/");


      }
      else {
        
        const rdata = await ressponse.json();
        console.log(`res from backend   ${rdata.extradetails || rdata.message }`);
        
        toast.error(rdata.extradetails || rdata.message);
      }
    }
    catch (e) {

      console.log(e);
    }

  }


  return (
    <div>
      <h1>Hello iam About page</h1>
      <form method="PoST" onSubmit={handlesubmit}>

        <input type="text" placeholder="email" name="email" value={login.email} onChange={handleclick} />

        <input type="text" placeholder="password" name="password" value={login.password} onChange={handleclick} />

        <input type="submit" placeholder="submit" />

      </form>
    </div>
  )
}

export default About
