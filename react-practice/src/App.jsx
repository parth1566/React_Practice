import { useState } from 'react';
// import Counter from './Day2/Counter';
// import Toggle from './Day2/Toggle';
import VoteButton from './Day2/VoteButton';

// import UserCard from './Day1/UserCard';
// import viratPic from './assets/virat.png'
// import rohitPic from './assets/rohit.png'
// import dhoniPic from './assets/msdhoni.png'


function App() {
//   const players = [
//   { id: 1, name: "Virat Kohli", image: viratPic, desc: "King of Cricket", age: 37, isCaptain: false },  
//   { id: 2, name: "Rohit Sharma", image: rohitPic, desc: "Hit-Man", age: 39, isCaptain: true },         
//   { id: 3, name: "MS Dhoni", image: dhoniPic, desc: "Captain-Cool", age: 45, isCaptain: false }        
// ];
 
    // <div  className="container">
    //   <UserCard name = "Virat Kohli" image = {viratPic} desc = "King of Cricket" age = {37}/>
    //   <UserCard name = "Rohit Sharma" image = {rohitPic} desc = "Hit-Man" age = {39} isCaptain = {true}/>
    //   <UserCard name = "MS Dhoni" image = {dhoniPic} desc = "Captain-Cool" age = {45}/>
    // </div>
    const [votes, setVotes] = useState(0);
    const [lastVoted, setLastVoted] = useState("");
    const handleVote = (name) => {
    setVotes(votes + 1);
    setLastVoted(name);
};
    return (
    // <div className="container">
    //   {players.map((player) => (
    //     <UserCard 
    //       key={player.id}
    //       name={player.name}
    //       image={player.image}
    //       desc={player.desc}
    //       age={player.age}
    //       isCaptain={player.isCaptain}
    //     />
    //   ))}
    // </div>
    <div>
      {/* <Counter/> */}
      {/* <Toggle/> */}
      <div className="vote-container">
        <h2 className="vote-stats">Total Votes: <span>{votes}</span></h2>
        <p className="last-voted">Last Vote: <span>{lastVoted}</span></p>
  <div className="vote-buttons">
    <VoteButton playerName="Virat" onVote={handleVote} />
    <VoteButton playerName="Rohit" onVote={handleVote} />
    <VoteButton playerName="Dhoni" onVote={handleVote} />
  </div>
</div>

    </div>
    )
  }
    
export default App
