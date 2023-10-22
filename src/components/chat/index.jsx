import { useState } from "react";
import styles from "./style.module.css";
import { useLocalStorage } from "../hook/useLocalStorage";
import { Link } from "react-router-dom";

const Chat = () => {
  const [chatDate, setChatDate] = useLocalStorage("Chat", []);
  const [inputValue, setInputValue] = useState("");
  const [user] = useLocalStorage("USER");
  const [showDialogReg, setShowDialogReg] = useState(false);

  const changeChat = () => {
    if (user) {
      if (inputValue.trim() !== "") {
        setChatDate([...chatDate, `${user ? user : "Аноним"}: ${inputValue}`]);
        setInputValue("");
      }
    } else {
      setShowDialogReg(true);
      setInputValue("");
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.title}>Чат</div>
      <div className={styles.chatContent}>
        {chatDate.map((el, i) => {
          return (
            <div key={i} className={styles.chatMessage}>
              {i + 1}.{el}
            </div>
          );
        })}
      </div>
      <div className={styles.contInpBtn}>
        <input
          type="text"
          value={inputValue}
          className={styles.inpBtn}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Напишите комментарий"
        />
        <button onClick={changeChat} className={styles.inpBtn}>
          Отправить
        </button>
        <button onClick={() => setChatDate([])} className={styles.inpBtn}>
          Очистить чат
        </button>
      </div>
      {showDialogReg && (
        <div className={styles.title}>
          <Link to="/">Вы не авторизованы</Link>
        </div>
      )}
    </div>
  );
};

export default Chat;
