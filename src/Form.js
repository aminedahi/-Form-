import React from 'react'
import {useState} from 'react'
function Form() {
    const [val,setVal]=useState({})
    const [message,setMessgae]=useState("")
    const [issubmit,setIssubmit]=useState(false)
    const [checkedval,setChaeckdvel]=useState("")
    function handelChange(e){
        const {name,value,checked,type}=e.target
        setVal(pre=>{
            return{
                ...pre,[name]:value
            }
        })
        if(checked && type==="checkbox"){
            setChaeckdvel(pre=>{
                return [...pre,value]
            })
        }
    }
    function handelClick(){
        const m=`your name is ${val.nom} you're ${val.genre} your loisir is${checkedval} you livin in ${val.ville}`
        setMessgae(m)
        setIssubmit(true)
    }
  return (
    <div>
    {issubmit?message:
    <div>
        <h1>inscription</h1>
        nom<input type="text" onChange={handelChange} name="nom" value={val.nom}/>
        genre
        homme
        <input type="radio" onChange={handelChange} name="genre" value='homme'/>
        femme
        <input type="radio" onChange={handelChange} name="genre" value='femme'  />
        Loisire
        sport
        <input type="checkbox" onChange={handelChange} name="sport" value='sport'/>
        lecture
        <input type="checkbox" onChange={handelChange} name="lecture" value='lecture'/>
        <select onChange={handelChange}  name="ville" value="ville">
            <option value="agadir">agadir</option>
            <option value="fas">fas</option>
            <option value="casa">casa</option>
        </select>
        <button type="submit" onClick={handelClick}>inscrire</button>
        </div>}

    </div>
  )
}

export default Form