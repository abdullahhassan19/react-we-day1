import { useState } from "react";
import "./styles.css";
import Example from "./components/Example";
export default function App() {
  const [state, SetState] = useState(false);

  return (
    <div className="App">
      <h1> State:{state ? "ON" : "OFF"} </h1>
      <button
        onClick={function () {
          SetState(!state);
        }}
      >
        {" "}
        Switch
      </button>
      <Example />
    </div>
  );
}
