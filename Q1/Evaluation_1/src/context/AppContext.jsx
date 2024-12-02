import { createContext, useState } from "react";

export const AppContext=createContext();
export const AppProvider=({children})=>{
    let [isincome,setIncome]=useState([])
    let [isexpenses,setExpenses]=useState([])
    let [issavings,setsavings]=useState(0)
    return(
        <AppContext.Provider value={{isincome,setIncome,isexpenses,setExpenses,issavings,setsavings}}>
            {children}
        </AppContext.Provider>
    )
}
