import React, {useState} from "react"
import './Timer.css'

function Timer(){
    const [info, setInfo] = useState({hour: '', minutes: '', note: ''})
    const [timerSet, setTimerSet] = useState({})


    const handleChange= (e)=>{
        const {name, value} = e.target
        setInfo({...info,
            [name]: [value]})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       setTimerSet({hour: +info.hour, minutes: +info.minutes, note: info.note})
       setInfo({hour: '', minutes: '', note: ''})
      
 
      
    }
  

    const display=()=>{
        let when = new Date()
         if(when.getHours() === timerSet.hour && when.getMinutes() === timerSet.minutes){ 
            clearInterval(intervalId)   
            window.alert(timerSet.note)
        }
       }

    const intervalId = setInterval(display, 1000)

    return (<div>
        
        <div className="container">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
        
        <textarea
            className="textInput"
            name="note"
            rows='8'
            value={info.note}
            onChange={handleChange}
            placeholder="Text here"
           /></div>
           
       <label>
        <input
            className="timeInput"
            type="number"
            name="hour"
            value={info.hour}
            onChange={handleChange}
           /></label>
           <label>:
        <input
            className="timeInput"
            type="number"
            name="minutes"
            value={info.minutes}
            onChange={handleChange}
           /></label>
           <button type="submit" >Set</button>
        </form></div>
        
    </div>)
}

export default Timer
