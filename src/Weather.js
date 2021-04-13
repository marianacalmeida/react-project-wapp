import React from "react";
import "./Weather.css"
import Form from "./Form.js"

export default function Weather(){
    return (
        <div className="Weather">
            <Form/>
            <div className="day-date">
                <h1>Porto, Portugal</h1>
                <h3>Monday, 15:30</h3>
            </div>
            <div className="main-temperature">
                <p className="emoji">
                    🌤
                </p>
                <p className="main-t">
                    30ºC
                </p>
            </div>
            <div className="row row-infos" >
                <div className="col-4">
                    <p>wind: 15km/h</p>
                </div>
                <div className="col-4">
                    <p>sun and clouds</p>
                </div>
                <div className="col-4">
                    <p>humidity: 77%</p>
                </div>
            </div>
        </div>
    )}