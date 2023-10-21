import style from "./style.module.css"
import {Link} from "react-router-dom"
const Header = () => {
    return <div className={style.cont}>
        <nav className={style.nav}>
            <Link to="/" className={style.link}>Домашняя страница</Link>
            <Link to="/chat" className={style.link}>Чат</Link>
            <Link to="/test" className={style.link}>Подгрузка данных</Link>
            <Link to="/todo" className={style.link}>TODO</Link>
            <Link to="/smart-house" className={style.link}>Умный дом</Link>
        </nav>
    </div>
}
export default Header