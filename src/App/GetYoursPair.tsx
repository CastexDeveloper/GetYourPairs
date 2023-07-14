import { useState } from "react";
import { getPair3 } from "./Utils/getPair"

export default function GetYoursPair(){
    const [getArray,setArray] = useState<any>("")
    const [getNumber,setNumber] = useState<any>()
    const [getPairs,setPairs] = useState<any>([])
    console.time("3");
    //getPair3([1,9,5,0,20,-4,12,16,7],12);
    console.timeEnd("3")
    console.log(getPairs)
    return(<div>
        <h1>GetPairs</h1>
        <div style={{display: "flex",flexDirection: "column"}}>
            <label>Add a integer</label>
            <input type="number" value={getNumber} onChange={(a)=>setNumber(Number(a.target.value))} />
            <label>Add array of numbers (Numbers must be a list divide by "," like: 1,9,5...) </label>
            <input type="text" value={getArray} onChange={(a)=>setArray(a.target.value)}/>
            <button style={{marginTop: 10}} onClick={()=>setPairs(getPair3(getArray.split(","),getNumber))}>Process</button>
        </div>
        <h4>Only get pairs that the sum is equal to the integer.</h4>
        {getPairs && <h3>List of pairs</h3>}       
        <ul style={{listStyle: "none",padding: 0}}>
        {
            getPairs &&
            getPairs.map((p:any)=>
            <li>{p[0]} / {p[1]}</li>
            )
        }</ul>
    </div>)
}
