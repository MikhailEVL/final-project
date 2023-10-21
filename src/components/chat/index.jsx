import { useState } from "react"
import styles from "./style.module.css"
import { useLocalStorage } from "../hook/useLocalStorage"
import {Link} from "react-router-dom"

const Chat = () => {
    const [chatDate,setChatDate] = useLocalStorage("CHat",[])
    const [inputValue,setInputValue] = useState("")
    const [user] = useLocalStorage("USER")
    const  [showDialogReg,setShowDialogReg] = useState(false)
    
    const changeChat = () => {
if(user){

    setChatDate([...chatDate,`${user? user:"Аноним"}:${inputValue}`]);
    setInputValue("")
}
else{
    setShowDialogReg(true)
    setInputValue("")

}
    }
    return <div>
        <div className={styles.contChat}>
            <div className={styles.title}>Чат</div>
            {chatDate.map((el,i)=>{
                return(
                    <div key={i}>
                        {i + 1}.{el}

                    </div>
                )
            })}
        </div>
        <div className={styles.contInpBtn}>
            
            <input type="text" value={inputValue}  className={styles.inpBtn}onChange={(e)=> setInputValue(e.target.value)} placeholder="Напишите комментарий" />
            <button onClick={changeChat} className={styles.inpBtn}>Отправить</button>
            <button onClick={()=>setChatDate([])} className={styles.inpBtn}>Очистить чат</button>
            
        </div>
        {showDialogReg && (
                <div className={styles.title} ><Link to="/">Вы не авторизованы</Link></div>
            )}
    </div>
}

export default Chat