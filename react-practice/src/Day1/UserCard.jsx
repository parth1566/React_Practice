import React from "react";

const UserCard = (props) => {
    return(
        <div className="user-container">
            <h2 id="user-name">{props.name}</h2>
            <img id ="user-img" src={props.image} alt= {props.name}/>
            <p id = "user-desc"> Description of {props.desc}</p>
        </div>
    )
}

export default UserCard;