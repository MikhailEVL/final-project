import { useState } from "react"
import styles from "./style.module.css"
import { type } from "@testing-library/user-event/dist/type"
import { useLocalStorage } from "../hook/useLocalStorage"

const Home = () => {
   
    const [user,setUser] = useLocalStorage("USER","")
    const [inputValue,setInputValue] = useState("")
    return <div className={styles.cont}>
{user && (
    <div><div className={styles.title}>Приветствую вас,уважаемый {user}!</div>
    <button onClick={()=> setUser("")} className={styles.btn} >Выйти</button>
    </div>
)}
{!user && (
    <div >

        <input className={styles.inputlog} value={inputValue}
         onChange = {(e)=> setInputValue(e.target.value)} 
         type="text"
         placeholder="Ваше имя">
         </input>
        <button onClick={()=>setUser(inputValue)} className={styles.btn}>Сохранить</button>
    </div>
 
)}
    </div>
}

export default Home 