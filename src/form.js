import React, { useState, useEffect } from 'react'
import './App.css'

const LandingForm = () => {
    const [name, updateName] = useState("name")    
    const [name2, updateName2] = useState("password")
    useEffect(() => {
        document.querySelector(".updateMe").innerText = "Updated on DidMount"
    }, [])
    useEffect(() => {
        if((name !== "name") || (name2 !=="password")){
        document.querySelector(".updateMe").innerText = "Updating on ComponentDidUpdate"
        }
    },[name,name2])

    const [password, updatePassword] = useState()
    const copyAndPrintDetails = () => {
        debugger
        const inputs = document.querySelectorAll(".input1")
        const outputs = document.querySelectorAll(".p1")
        updateName(inputs[0].value)
        updateName2(inputs[1].value)
    }
    return (
        <div className="mainForm">
            <label>Name</label>
            <input className="input1" type="text"></input>
            <label>Password</label>
            <input className="input1" type="password"></input>
            <button onClick={copyAndPrintDetails}>Submit</button>
            <p className="p1">{name}</p>
            <p className="p1">{name2}</p>
            <div className="updateMe">To be updated</div>

        </div>
    )
}
export default LandingForm