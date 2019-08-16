import React from "react";

function StarWarsCard(props) {
    console.log(props);
return(
    <div className="card-container">
        <h3 className="name">{props.result.name}</h3>
        <div className="gender">Gender: {props.result.gender}</div>
        <div className="birthYear">Birth Year: {props.result.birth_year}</div>
        <div className="height">Height: {props.result.height}</div>
    </div>
    );
}

export default StarWarsCard;