import { useMemo, useState } from "react";
import NumberDisplayer from "./components/NumberDisplayer.jsx";

function App() {

  const [numbersCollection, setNumbersCollection] = useState([]);
  const [numInput, setNumInput] = useState('')

  const handleAddNumber = (number) => {
    setNumbersCollection(prevNumbers => [...prevNumbers, parseInt(number)])
    setNumInput("")
  }

  const totalSum = useMemo(() => {
    // Sum all the numbers in the array
    return numbersCollection.reduce((acc, num) => acc + num, 0);
  }, [numbersCollection])

  return (
    <>
      <div>
        <input value={numInput} onChange={(event) => setNumInput(event.target.value)} type="number" />
        <button onClick={() => handleAddNumber(numInput)} >Add</button>
        {numbersCollection.map(number => <NumberDisplayer key={number}  number={number}/>)}

        <p>Sum: {totalSum}</p>
      </div>
    </>
  )
}

export default App
