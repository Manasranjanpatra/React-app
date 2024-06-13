import { createContext,  useState } from "react";
import Cookie from 'js-cookie';

const cookie = Cookie.get('jwt');
const Appcontext = createContext();
const AppProvider = ({ children }) => {

  const [jwt, setJwt] = useState(cookie);
  const[admin,setAdmin]=useState();

  const islogdin = !!jwt;
  console.log(islogdin);

  return (
    <Appcontext.Provider value={{ islogdin, setJwt,cookie,setAdmin,admin }}>

      {children}


    </Appcontext.Provider>
  );
};
export { Appcontext, AppProvider };