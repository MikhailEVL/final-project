import { useEffect, useState } from "react"

export const useLocalStorage = (key,defaultValue)=> {
    const [state,SetState]= useState(()=>{
        let value

        try{
            value = JSON.parse(window.localStorage.getItem(key) || defaultValue)
        }catch(error){
            value = defaultValue
        }
        return value
    })

useEffect(() => {
    window.localStorage.setItem(key,JSON.stringify(state))

},[state]);
return [state,SetState]
};