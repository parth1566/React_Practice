import { useState } from "react";
import MessageBox from "./Day3/MessageBox";
import CharCounter from "./Day3/CharCounter";


function App() {
    const[message, setMessage] = useState("");
    return (
    <div className="message-container">
      <MessageBox setMessage = {setMessage} />
      <CharCounter message = {message} />
    </div>
    )
}

export default App
