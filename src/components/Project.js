import React from "react";

function Project(props){
    return (
        <div>
            <hr/>

            <p><b>{props.title} - </b> {props.live ? (<span><a href={props.live}>live demo</a> | </span>) : ""}<a href={props.repo}>Github Repo</a></p>
            <i>{props.description}</i>
            <ul>
                {props.details.map(detail => <li>{detail}</li>)}
            </ul>
            {props.src ? (<img class="port-pic" src={props.src} alt={props.alt}/>) : ""}
        </div>
    );
}

export default Project;