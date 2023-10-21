import { useState } from "react"
import style from "./style.module.css"
import bin from "../../image/bin.png"
import on from "../../image/on.png"
import off from "../../image/off.png"
import edit from "../../image/edit.png"
import save from "../../image/save.png"
import { useLocalStorage } from "../hook/useLocalStorage"
const SmartHouse = () => {
    
    const [device,setDevice] = useLocalStorage("smart",[
        {id:1, name:"Лампочка",isPower:false,isEdit:false},
        {id:2, name:"Телевизор",isPower:false,isEdit:false},
        {id:3, name:"Колонка" ,isPower:false,isEdit:false},
        {id:4, name:"Компьютер" ,isPower:false,isEdit:false},
    ])
    const [addValue,setAddValue] = useState("")
    const [editValue,setEditValue]=useState("")
    const handleAdd = () => {
        setDevice([...device,{id:Date.now, name:addValue,isPower:false,isEdit:false}])
        setAddValue("");
    }
    const handleDelete = (idDevice) => {
        setDevice(()=> device.filter((el)=>el.id !== idDevice))

    }

    const handlePower = (idDevice) => {
        setDevice(()=> device.map(el=>{
            if(el.id === idDevice){
                return {...el,isPower:!el.isPower} 
            }
            return el;
        }))
    }
    const showEditDialog = (isDevice) => {
        setDevice(()=> device.map(el=>{
            if(el.id === isDevice){
                setEditValue(el.name)
                return{...el,isEdit:true};
                
            }
            return el
        }))
    }
    const handleEdit = (isDevice)=> {
        setDevice(()=> device.map(el=>{
            if(el.id === isDevice){
                return{...el,name:editValue,isEdit:false}
            }
            return el;
        }))

    }
    return <div className={style.cont}>
        <div className={style.title}>Устройства умного дома</div>

        <div>
    <input type="text" value={addValue} className={style.inputlog} onChange={(e)=> setAddValue(e.target.value)} placeholder="Введите название устройства" />
    <button onClick={handleAdd} className={style.btn}>Добавить устройство</button>

        </div>
        <div>{device.map( (item) => {
            return(<div>
                {item.isEdit ? (
                    <div>
                      <input type="text" value={editValue} onChange={(e)=> setEditValue(e.target.value)} className={style.inputedit} placeholder="Введите новое название" /> 
                      <img onClick={()=>handleEdit(item.id)} src={save} className={style.pic} alt="save" />
                    </div>
                ): <div className={style.card} key={item.id}>
                <div className={style.title}>
                    {item.name}
                </div>
                <div className={style.picMap}>
                    <img onClick={() => handlePower(item.id)} src={item.isPower ? on:off } className={style.pic} alt="on/off" />
                     <img onClick={()=>showEditDialog(item.id)} src={edit} className={style.pic} alt="edit"/>
                    <img src={bin} onClick={()=> handleDelete(item.id)} className={style.pic}alt="delete" />
                </div>
                    </div>}
            </div>

    


           
        )
        })}</div>
    </div>
}

export default SmartHouse