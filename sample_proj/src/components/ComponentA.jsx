
import React,{useState,createContext} from 'react';
//useContext() : React Hook that allows us to share values b/w multiple levels of components without passing props through each level
import ComponentB from './ComponentB';
export const UserContext = createContext();
function ComponentA() {

    const [user,setUser ] = useState("Nizy")
  return (<>
    <div className="box"> <h1>ComponentA</h1>
    <h2>{`Hello ${user}`}</h2>
    <UserContext.Provider value={user}>
        <ComponentB/>
        </UserContext.Provider>
    
    </div>
    </>
  )
}

export default ComponentA