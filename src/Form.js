import React from "react";
import "./Form.css"

export default function Form(){

    return(
        <form>
            <div className="row form-row">
                <div className="col-9 col-city">
                    <input type="search" placeholder="Search a city" className="form-control w-100 city-btn" autofocus="on" autocomplete="on"></input>
                </div>
                <div className="col-3 col-search">
                    <input type="submit" value="search" className="btn btn-primary w-100 search-btn"></input>
                </div>
            </div>
        </form>
    )
}