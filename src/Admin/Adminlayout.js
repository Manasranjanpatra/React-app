import React from 'react'
import { Outlet } from 'react-router-dom'

import { Link } from 'react-router-dom';

const Adminlayout = () => {
  return (
    <div>
        Hello  I am admin page
        <header>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li className="li" ><Link to="/admin/user">user</Link></li>
                            <li className="li" ><Link to="/admin/contact">Contacts</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
    </div>
  )
}

export default Adminlayout
