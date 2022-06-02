import { async } from "@firebase/util";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ref, set } from "firebase/database";
import { firebaseDatabase } from "../backend/firebase-handler.js";
import '../studentdetails/studentdetails.style.css';

const RecordData = () => {

    const nav =useNavigate();

    const [studentData, setstudentData] = useState({
        name:"",
        college:"",
        department:"",
        sem:"",
        SSLCmarks:"",
        PUCmarks:"",
        currentCGPA:""
    })

    const handlerChange = (event) => {
        const { name, value} = event.target;
        setstudentData({
            ...studentData,
            [name]: value
        })
    }
    const handleSave = async() => {
       const recordRef = ref(firebaseDatabase, `STUDENT_RECORDS/${studentData.name}`);
       await set(recordRef, studentData);
       //alert("Data recorded!")
       nav("/JobsComponent")
    }
    return (
            <div className="record-data1">
                <div className="record-data2">
                    <h2>Enter your Details</h2>
                    <label>Name:</label>   
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="name" placeholder="name" />
                    <label>College name:</label>
                    <input className="inputs" value={studentData.college} onChange={handlerChange} name="college" placeholder="College name" />
                    <label>Department:</label>
                    <input className="inputs" value={studentData.department} onChange={handlerChange} name="department" placeholder="Department" />
                    <label>Semister:</label>
                    <input className="inputs" value={studentData.sem} onChange={handlerChange} name="sem" placeholder="semister" />
                    <label>SSLC marks:</label>
                    <input className="inputs" value={studentData.SSLCmarks} onChange={handlerChange} name="SSLCmarks" placeholder="in %" type={'number' } />
                    <label>PUC marks:</label>
                    <input className="inputs" value={studentData.PUCmarks} onChange={handlerChange} name="PUCmarks" placeholder="in %" type={'number'} />
                    <label>CGPA:</label>
                    <input className="inputs" value={studentData.currentCGPA} onChange={handlerChange} name="currentCGPA" placeholder="CGPA" type={'number'} />
                    <button className="SUBMIT" onClick={handleSave}>SUBMIT</button>
        
        </div>
        </div>

    )
}
export default RecordData;