import { useMemo, useState } from "react";
import NumberDisplayer from "./components/NumberDisplayer.jsx";

// TODO: Figure the key issue
// TODO: Convert to form
// NOTE: Sass seems to be an overkill
function App() {

  const [numbersCollection, setNumbersCollection] = useState([]);
  const [numInput, setNumInput] = useState('')

  const handleAddNumber = (number) => {
    setNumbersCollection(prevNumbers => [...prevNumbers, parseInt(number)])
    setNumInput("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleAddNumber(numInput)
  }

  const handleDeleteClick = (index) => {
    const numbersCollectionCopy = [...numbersCollection]
    numbersCollectionCopy.splice(index, 1)
    setNumbersCollection(numbersCollectionCopy)

    // Alternate - Modify the state directly and update modified state - Not preferred
    // setNumbersCollection([...numbersCollection])
  }
  const totalSum = useMemo(() => {
    // Sum all the numbers in the array
    return numbersCollection.reduce((acc, num) => acc + num, 0);
  }, [numbersCollection])

  return (
    <div className="main-wrapper">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input value={numInput} onChange={(event) => setNumInput(event.target.value)} type="number"/>
        <button type="submit">Add</button>
      </form>

      <NumberDisplayer number={1} onDeleteClick={() => {
      }}/>
      {numbersCollection.map((number, index) =>
        <NumberDisplayer
          key={number}
          number={number}
          onDeleteClick={() => handleDeleteClick(index)}
        />
      )}

      <div className="box bg-black text-white">
        <p>Sum</p>
        <p>{totalSum}</p>
      </div>
    </div>
  )
}

export default App

