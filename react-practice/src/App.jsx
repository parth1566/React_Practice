import { useState } from "react";
import NameInput from "./Day3/NameInput";
import NameDisplay from "./Day3/NameDisplay";

function App() {
  const[name, setName] = useState("");

  return(
    <div className="name-container">
      <NameInput setName = {setName} />
      <NameDisplay name = {name} />
    </div>
  )
}

export default App
