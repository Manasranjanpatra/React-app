import React from 'react';
import "./Style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const li=document.querySelectorAll(".li");
    li.forEach(lii=>{
        lii.addEventListener('click',()=>{
            console.log("manas");
            document.querySelector(".active").classList.remove("active");
            lii.classList.add("active")

        })
      

    })
  return (
    <div>
         <div class="container">
        <div class="logo"><h2>Manas</h2></div>
        <div class="navbar">
            <nav>
                <ul>
                    <li class="li active"  >Manas</li>
                    <li class="li" >Manas</li>
                    <li class="li" ><Link to="/register">Register</Link></li>
              
                    <li class="li" >kkkkkhk</li>
                    <li class="li" >service</li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Navbar
