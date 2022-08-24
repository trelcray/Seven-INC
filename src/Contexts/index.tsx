import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProviderProps{
    children: JSX.Element | JSX.Element[];
}

interface contextProps {
  isOpen?: boolean | any,
  setIsOpen?: Dispatch<SetStateAction<boolean>> | any,
}

export const StateContext = createContext({} as contextProps);

export function ContextProvider({children}: ContextProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <StateContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </StateContext.Provider>
    )
  }