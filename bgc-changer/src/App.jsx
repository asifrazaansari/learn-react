import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  let [colour, setColour] = useState("olive");

  let changeColour = (colour) => {
    setColour(colour);
  };

  useEffect(() => {
    console.log("colour changed to " + colour);
    document.body.style.backgroundColor = colour;
  }, [colour])

  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg">
        <Button onClick={() => changeColour("red")} colourName="red" />
        <Button onClick={() => changeColour("green")} colourName="green" />
        <Button onClick={() => changeColour("black")} colourName="black" />
        <Button onClick={() => changeColour("white")} colourName="white" />
        <Button onClick={() => changeColour("grey")} colourName="grey" />
        <Button onClick={() => changeColour("aqua")} colourName="aqua" />
      </div>
    </>
  );
}

export default App;
