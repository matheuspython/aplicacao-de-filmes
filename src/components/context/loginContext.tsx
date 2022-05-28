import React,{ createContext, ReactNode, useState } from "react";

type Usertype = {
  name: string
}

type PropsOfState = {
  state: Usertype;
  setState: React.Dispatch<React.SetStateAction<Usertype>>
}

const DEFAULT_VALUE = {
  state: {
    name: ''
  },
  setState: () => {}
}

const UserContext = createContext<PropsOfState>(DEFAULT_VALUE)

interface contextProps {
  children: ReactNode
}

const UserContextProvider: React.FC<contextProps> = ({ children } )=>{
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return(
    <UserContext.Provider 
      value={{state, setState}}
    >
      { children }
    </UserContext.Provider>
  )
}


export {  UserContextProvider }
export default UserContext