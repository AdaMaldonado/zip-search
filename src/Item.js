import React, {useState} from "react";

export default function Item(props){

    console.log(props.data)

    return (
        <div id="box">
            <div id="data">
                <div id="head">
                    <p>{props.data.City}, {props.data.State}</p>
                </div>
                    <ul>
                        <li>State: {props.data.State}</li>
                        <li>Location: ({props.data.Lat}, {props.data.Long})</li>
                        <li>Population (estimated): {props.data.EstimatedPopulation}</li>
                        <li>Total Wage: {props.data.TotalWages}</li>
                    </ul>
            </div>
        </div>
    )
}