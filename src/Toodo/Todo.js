import React, { useEffect, useState } from 'react'
import './Todo.css'

function Todo() {
  const getlocal =()=>{
    const list =localStorage.getItem("mytodolist");
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }

  }
  const [data, setData] = useState("");
  const [arr, setArr] = useState(getlocal());
  const [edit,setEdit]=useState(" ");
  const [btn,setBtn]=useState(false);

//  to get the element
  const getdata = () => {
    if(!data){
      alert("please fill the iteam");
    }
    else if(data && btn){
      setArr(arr.map((currElm)=>{
        if(currElm.id===edit){
          return {...currElm,name:data}
        }
        return currElm;
      
      }));
      setData("");
      setEdit(null);
      setBtn(false);


    }
    else{
      const update = ({
        id: new Date().getTime().toString(),
        name: data,
      });
      setArr([...arr, update]);
      setData("");
    }
  }
  //  to delete itaem
  const Delete = (index) => {

    const updateitem = arr.filter((currElm)=>{
      return currElm.id!==index;
    })
    setArr(updateitem);
  };
  //  data in local storage

  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(arr));

  },[arr]);

  // to Edit the iteam
  const Edited = (index)=>{
    const Newitem = arr.find((currElm)=>{
        return currElm.id===index;
    });
    setData(Newitem.name);
    setEdit(index);
    setBtn(true);
  }

  // to remove all the iteam
   const Remove=()=>{
    setArr([])
   }
  return (
    <div>
      <div className="container">
        <h1>Todo list</h1>
        <div className="input">
          <input placeholder=" Enter the item...." type="text" class="place" value={data}
            onChange={(e) => {
              setData(e.target.value)

            }} />
          <div className="logo">
            {
              btn ?<i class="fa-sharp fa-solid fa-file-pen" onClick={getdata}></i> : <i class="fa-solid fa-plus" onClick={getdata} ></i>
            }
           
          </div>
        </div>
        {arr.map((currElm) => {
          return (
            <div className="box" key={currElm.id}>
              <h4>{currElm.name}</h4>
              <i class="fa-sharp fa-solid fa-file-pen" onClick={()=>{Edited(currElm.id)}} ></i>
              <i class="fa-solid fa-trash-can" onClick={() => {
                Delete(currElm.id)
              }}></i>
            </div>
          )
        })};

        <button onClick={Remove}>Remove All</button>
      </div>

    </div>
  )
}

export default Todo
