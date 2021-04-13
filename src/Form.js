import React from "react";
import "./Form.css"

export default function Form(){

    return(
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Search a city" className="form-control w-100"></input>
                </div>
                <div className="col-3">
                    <input type="submit" value="search" className="btn btn-primary w-100"></input>
                </div>
            </div>
        </form>
    )
}