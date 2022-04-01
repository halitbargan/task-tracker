import React,{useState} from 'react'
import {Form, Label,Button,Input} from 'react-bootstrap';


const Gorevekle = () => {
const [duty, setduty] = useState("");
console.log(duty);
const [gun, setgun] = useState("")
console.log(gun)



    
  return (
    <div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task</label>
    <input onChange={(e)=>setduty(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={duty}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Day&Time</label>
    <input onChange={(e)=>setgun(e.target.value)} type="date" class="form-control" id="exampleInputPassword1" value={gun}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
export default Gorevekle