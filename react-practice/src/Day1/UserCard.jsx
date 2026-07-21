import React from "react";
import './UserCard.css';

const UserCard = (props) => {
    return(
        <div className="user-container">
            <h2 id="user-name">{props.name}</h2>
            <img id ="user-img" src={props.image} alt= {props.name}/>
            <p id = "user-desc"> {props.desc}</p>
            <p id = "user-age">{props.age}</p>
            {props.isCaptain && <p id="user-captain">Current Captain ⭐</p>}
        </div>
    )
}

export default UserCard;