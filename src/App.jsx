import { useState } from "react";
import NumberDisplayer from "./components/NumberDisplayer.jsx";

function App() {

  const [numbersCollection, setNumbersCollection] = useState([])

  return (
    <>
      <div>
        <input type="number" />
        <button>Add</button>
        {numbersCollection.map(number => <NumberDisplayer key={number}  number={number}/>)}
      </div>
    </>
  )
}

export default App
