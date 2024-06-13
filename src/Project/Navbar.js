import React, { useContext } from 'react';
import "./Style.css";
import { Link } from 'react-router-dom';
import { Appcontext } from './Auth';


const Navbar = () => {
    const { islogdin, setJwt } = useContext(Appcontext);

    const li = document.querySelectorAll(".li");
    li.forEach(lii => {
        lii.addEventListener('click', () => {
            
            console.log("manas");
            document.querySelector(".active").classList.remove("active");
            lii.classList.add("active")

        })


    })
    return (
        <div>
            <div className="container">
                <div className="logo"><h2> Manas{setJwt} </h2></div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li className="li" ><Link to="/">Home</Link></li>
                            <li className="li active"  ><Link >Manas</Link></li>
                            <li className="li" ><Link to="/secret">Secret</Link></li>
                            {
                                islogdin ? <li className="li" ><Link to="/logout">Logout</Link></li> :
                                    <>

                                        <li className="li" ><Link to="/register">Register</Link></li>
                                        <li className="li" ><Link to="/about">Login</Link></li>
                                    </>
                            }
                            <li className="li" ><Link to="/contact">Contact Us </Link></li>


                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
