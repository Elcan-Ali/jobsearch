import { createContext, useLayoutEffect, useState } from "react";
import Data from "../assets/data/jobs.json"
export const DataContext = createContext()



function DataContextProvider({ children }) {
    const [data, setData] = useState([])
    useLayoutEffect(() => {
        setData(Data.data);
    }, [])

    let obj = { data, setData }
    return (
        <DataContext.Provider value={ obj }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider