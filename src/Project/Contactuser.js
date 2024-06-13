import React,{ useEffect, useState } from 'react'

const Contactuser = () => {
    const [user, setUser] = useState([])
    const getallusers = async () => {
      try {
        const response = await fetch("http://localhost:4000/contactdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        
        const data = await response.json();
        console.log(data);
        setUser(data)
  
    
      } catch (error) {
        console.log(error);
  
      }
    }
  
  
  
    useEffect(() => {
      getallusers()
    }, [])
  return (
    <div>
       THE ALL DATA IS GIVEN BELOW contact
      {user.map((currElem) => {
        return <div className="cnnnontainer">

          <h4>the name is {currElem.Email} & {currElem.Message}</h4>
        </div>


      })}
    </div>
  )
}

export default Contactuser
