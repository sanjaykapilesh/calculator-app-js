import { useMemo, useState } from 'react';
import NumberDisplayer from './components/NumberDisplayer.jsx';

function App() {
  // State for all the numbers in the list
  const [numbersCollection, setNumbersCollection] = useState([]);
  // Input value
  const [numInput, setNumInput] = useState('');

  /**
   * This method is used to update `numbersCollection` and `numInput`
   * This triggers a rerender to update the UI because of the state change
   * @param number
   */
  const handleAddNumber = (number) => {
    setNumbersCollection((prevNumbers) => [...prevNumbers, parseInt(number)]);
    setNumInput('');
  };

  /**
   * This method is used to handle the form submission
   * @param event
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleAddNumber(numInput);
  };

  /**
   * This method is used to delete a number from the list
   * @param index
   */
  const handleDeleteClick = (index) => {
    const numbersCollectionCopy = [...numbersCollection];
    numbersCollectionCopy.splice(index, 1);
    setNumbersCollection(numbersCollectionCopy);

    // Alternate - Modify the state directly and update modified state - Not preferred
    // setNumbersCollection([...numbersCollection])
  };

  // Calculate the sum of all the numbers in the list
  const totalSum = useMemo(() => {
    // Sum all the numbers in the array
    return numbersCollection.reduce((acc, num) => acc + num, 0);
  }, [numbersCollection]);

  return (
    <div className="main-wrapper">
      {/* Input Form */}
      <form onSubmit={(e) => handleFormSubmit(e)} className="app-form">
        <input
          value={numInput}
          onChange={(event) => setNumInput(event.target.value)}
          type="number"
          className="form-input"
          placeholder="Enter a number"
        />
        <button type="submit" className="form-submit-btn">
          ADD
        </button>
      </form>

      {/* Render list of Numbers */}
      {numbersCollection.map((number, index) => (
        <NumberDisplayer key={number} number={number} onDeleteClick={() => handleDeleteClick(index)} />
      ))}

      <div className="box bg-black text-white">
        <p>Sum</p>
        <p>{totalSum}</p>
      </div>
    </div>
  );
}

export default App;
