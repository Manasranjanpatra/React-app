import React, { useState } from 'react'

const ContactUs = () => {
  const [login, setLogin] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const handleclick = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setLogin({
      ...login,
      [name]: value

    });

  }


  const handelonsubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(login),

      });
      
      console.log( "the response is " + response.ok);
      console.log("COMPLETE");
      if (response.ok) {
        alert("SUCESSFULLY");
        setLogin({
          Name:"",
          Email: "",
          Message: "",
          
        });
        
      }
      else {
        
        const rdata = await response.json();
        console.log(`res from backend   ${rdata.extradetails}`);
        
        window.alert(rdata.extradetails);

      }
    }
    catch (e) {

      console.log(e);
    }




  }
  return (
    <div>
      <form method="POST" onSubmit={handelonsubmit}>
        <input type="text" placeholder="name" name="Name" value={login.Name} onChange={handleclick} />

        <input type="text" placeholder="email" name="Email" value={login.Email} onChange={handleclick} />

        <input type="text" placeholder="message" name="Message" value={login.Message} onChange={handleclick} />

        <input type="submit" placeholder="SUBMIT" />




      </form>
    </div>
  )
}

export default ContactUs;
