// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Todo from './Toodo/Todo';
import Navbar from './Project/Navbar';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Project/Login';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Login />}></Route>
          
        </Routes>
      </Router>
     

     

    </div>
  )

}


// todo
// function App() {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App








// import Speech from './components/Speech';




// function App() {
//   return (
//     <div>
//     <Speech/>

//     </div>

//   );
// }

export default App;
