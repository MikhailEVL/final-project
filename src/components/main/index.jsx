import style from "./style.module.css"
import {Switch,Route} from "react-router-dom"
import Chat from "../chat"
import TestApi from "../test-api"
import Home from "../home"
import TodoList from "../todos"
import SmartHouse from "../smart"
const Main = () => {
     return <div className={style.cont}>
          <Switch>
               <Route path="/chat" component={Chat}></Route>
               <Route path="/test" component={TestApi}></Route>
               <Route exact path="/" component={Home}></Route>
               <Route exact path="/todo" component={TodoList}></Route>
               <Route exact path="/smart-house" component={SmartHouse}></Route>
          </Switch>
     </div>
} 

export default Main     