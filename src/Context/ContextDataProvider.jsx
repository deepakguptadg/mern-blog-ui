import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import { apiBaseUrl } from "../Utility/Constant";
const DataProviderContext = createContext()

const ContextDataProvider = ({ children }) => {
    const [feedbacklist, setFeedbacklist] = useState([])
    
    const getfeedbackfun = (id) => {
        const data = { id: id }
        axios.post(apiBaseUrl + `/feedback/get-feedback`, data)
            .then(response => {
                setFeedbacklist(response.data.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const ratting = () => {
        let num = 0
        for (let index = 0; index < feedbacklist.length; index++) {
            const star = feedbacklist[index].starCount;
            num = num + star / feedbacklist.length
        }
        return num
    }
    const totalRatting = ratting().toFixed(2)
    


    useEffect(() => {

    }, [])

    return (
        <>
            <DataProviderContext.Provider value={{ getfeedbackfun, feedbacklist, totalRatting }}>
                {children}
            </DataProviderContext.Provider>
        </>
    )
}
export function useContextDataProvider() {
    return useContext(DataProviderContext)
}
export default ContextDataProvider