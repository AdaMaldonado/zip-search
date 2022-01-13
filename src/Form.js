import React, {useState} from "react";
import axios from "axios";

export default function Form(props) {

    const [zipCode, setZipCode] = useState("")

    const getZip = () => {
        axios.get(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`)
            .then(response => {props.setData(response.data)})
    }

    return (
        <div id="input">
            <h1>Zip Code Search</h1>
            <label>Zip Code:</label>
            <input placeholder="Try 10016"
                   onChange={event => setZipCode(event.target.value)}
                   value={zipCode}/>
            <button onClick={getZip}>Get Details</button>
        </div>
    )
}