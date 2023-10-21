import { useEffect, useState } from "react"
import styles from "./style.module.css"
import pic from "../../image/123.png"

const TestApi = () => {
    const [teamDate,setTeamDate] = useState([])
    const [isload,setIsload] = useState(true)

    useEffect(()=> {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6ca08fd8amsh0fc0e7ffc008ba3p13a8d6jsn7426e5b02add',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};
        
    
    fetch(url,options)
    .then((res) => res.json())
    .then((res) => 
    {console.log(res.data)
        setTeamDate(res.data);
        setIsload(false);
    });
},[])


    return <div className={styles.cont}> <div>
{isload && <div>Загрузка данных...</div>

}
<table>
    <tr>
        <th>Номер</th>
        <th>abb</th>
        <th>Имя</th>
        <th>Город</th>
        <th style={{width:"10px"}}>Del</th>
    </tr>
</table >

    {teamDate.map((el,i) => {
        return (
            <div  key={el.id}>
               <table>
   
   <tr>
    <td>{i+1}</td>
    <td>{el.abbreviation}</td>
    <td>{el.name}</td>
    <td>{el.city}</td>
    
  <td style={{width:"10px"}}>

                <img
                src={pic}
                style={{width:"15px",height:"15px"}}
                onClick={()=>{
                    setTeamDate(
                        teamDate.filter((filterEl)=> el.id !== filterEl.id))} }
                />
  </td>
                </tr>
                </table>
            </div>
        )
    })}
    </div>
    </div>
}
export default TestApi