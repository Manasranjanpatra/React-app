import React, { useEffect, useState ,} from 'react'
import {Link}  from 'react-router-dom'



const User = () => {
  const [user, setUser] = useState([]);

 

const deleteuser=async(id)=>{
 try {
  const resdponse =await fetch(`http://localhost:4000/delete/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  
  });
  if(resdponse.ok){
    getallusers()
        
  }
  const dataa= await resdponse.json();
  console.log(dataa);

  
 } catch (error) {
  
 }
}


  const getallusers = async () => {
    try {
      const response = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    
      const data = await response.json();

      console.log(data);
      setUser(data)
  


      console.log(data[0].name);
    } catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {
    getallusers()
  }, [])
  return (
    <div>
      THE ALL DATA IS GIVEN BELOW
      {user.map((currElem) => { 
        return <div className="cnnnontainer">
              

          <h3>the name is {currElem.name} &  {currElem.confirmpassword} &
          
          <li ><Link to={`/admin/user/edit/${currElem._id}`}>EDIT    </Link></li>
          <button onClick={()=>deleteuser(currElem._id)}>Delete</button></h3>
        </div>


      })}
      
    </div>
  )
}

export default User
