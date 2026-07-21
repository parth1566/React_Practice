import { useState } from 'react';
import UserCard from './Day1/UserCard';
import viratPic from './assets/virat.png'
import rohitPic from './assets/rohit.png'
import dhoniPic from './assets/msdhoni.png'


function App() {
  const players = [
  { id: 1, name: "Virat Kohli", image: viratPic, desc: "King of Cricket", age: 37, isCaptain: false },  
  { id: 2, name: "Rohit Sharma", image: rohitPic, desc: "Hit-Man", age: 39, isCaptain: true },         
  { id: 3, name: "MS Dhoni", image: dhoniPic, desc: "Captain-Cool", age: 45, isCaptain: false }        
];
 
    // <div  className="container">
    //   <UserCard name = "Virat Kohli" image = {viratPic} desc = "King of Cricket" age = {37}/>
    //   <UserCard name = "Rohit Sharma" image = {rohitPic} desc = "Hit-Man" age = {39} isCaptain = {true}/>
    //   <UserCard name = "MS Dhoni" image = {dhoniPic} desc = "Captain-Cool" age = {45}/>
    // </div>
    return (
    <div className="container">
      {players.map((player) => (
        <UserCard 
          key={player.id}
          name={player.name}
          image={player.image}
          desc={player.desc}
          age={player.age}
          isCaptain={player.isCaptain}
        />
      ))}
    </div>
)
}

export default App
