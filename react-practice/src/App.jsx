import { useState } from "react";
import CelsiusInput from "./Day3/CelsiusInput";
import FahrenheitInput from "./Day3/FahrenheitInput";



function App() {

  const[celsius, setCelsius] = useState("");
    return(
     <div className="temp-container">
  <h1 className="temp-title">🌡️ Temperature Converter</h1>
  <CelsiusInput celsius={celsius} setCelsius={setCelsius} />
  <p className="temp-divider">⇅</p>
  <FahrenheitInput celsius={celsius} setCelsius={setCelsius} />
</div>
  )
}

export default App
