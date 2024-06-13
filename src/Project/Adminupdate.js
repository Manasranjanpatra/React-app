import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Adminupdate = () => {
  const navigate=useNavigate();
  const [admind, setAdmind] = useState(
    {
      name: "",
      email: ""
    }
  )

  const setadmindata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAdmind({
      ...admind,
      [name]: value

    });

  };
  const setdata = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(admind),



      });
      console.log(response);
      if (response.ok) {
        setAdmind({
          name: "",
          email:""

        })
        navigate("/admin/user")
        console.log("SUCCESS");
      }

    } catch (error) {
      console.log(error);

    }

  }

  const params = useParams();
  console.log(params);
  const edituser = async () => {
    try {
      const editdata = await fetch(`http://localhost:4000/singleuser/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(),

      });

      const Edit = await editdata.json()
      console.log(Edit);
      setAdmind(Edit)
     



    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    edituser();
  }, [])
  return (
    <div>
      heloHello I am Admin page
      <div>


        <form action="" onSubmit={setdata}>
          <input type="text" name="name" id="" value={admind.name}
            onChange={setadmindata} />
          <input type="email" name="email" id="" value={admind.email}
            onChange={setadmindata} />
          <input type="submit" value=" UPDATE" />

        </form>

      </div>



    </div>
  )
}

export default Adminupdate
