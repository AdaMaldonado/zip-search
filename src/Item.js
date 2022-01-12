import React, {useState} from "react";

export default function Item(props){

    console.log(props.data)

    return (
        <div>
            <h2>
                State: {props.data.State}
                <br></br>
                Location: ({props.data.Lat}, {props.data.Long})
                <br></br>
                Population (estimated): {props.data.EstimatedPopulation}
                <br></br>
                Total Wage: {props.data.TotalWages}
            </h2>
        </div>
    )
}