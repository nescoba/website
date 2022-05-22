import React from "react";

export default function Card(props){
    return(
        <div className="col-4">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {props.showMore && <p className="card-text">{props.caption}</p>}
                    <button className="btn btn-primary" onClick={()=>props.toggle(props.id)}>{`Show ${props.showMore? "less":"more"}`} </button>
                </div>
            </div>
        </div>
    )
}