import { useState } from 'react';
import UserCard from './Day1/UserCard';
import viratPic from './assets/virat.png'
import rohitPic from './assets/rohit.png'
import dhoniPic from './assets/msdhoni.png'


function App() {
  return (
    <div>
      <UserCard name = "Virat Kohli" image = {viratPic} desc = "King of Cricket"/>
      <UserCard name = "Rohit Sharma" image = {rohitPic} desc = "Hit-Man" />
      <UserCard name = "MS Dhoni" image = {dhoniPic} desc = "Captain-Cool" />
    </div>
  )
}

export default App
