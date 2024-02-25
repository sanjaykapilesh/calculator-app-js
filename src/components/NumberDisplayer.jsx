import { DeleteIcon } from '../assets/index.js';

/**
 * This component is used to display the number and delete button
 * @param number
 * @param onDeleteClick
 * @returns {JSX.Element}
 * @constructor
 */
const NumberDisplayer = ({ number, onDeleteClick }) => {
  return (
    <div className="box app-number-box">
      <p className="mr-10">{number}</p>
      <button onClick={onDeleteClick} className="btn-delete">
        <img src={DeleteIcon} alt="Delete Number" />
      </button>
    </div>
  );
};

export default NumberDisplayer;
