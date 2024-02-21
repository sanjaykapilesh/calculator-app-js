import { DeleteIcon } from "../assets/index.js";

const NumberDisplayer = ({number, onDeleteClick}) => {
  return (
    <div className="box app-number-box">
      <p className="mr-10">{number}</p>
      <button onClick={onDeleteClick} className="btn-delete">
        <img src={DeleteIcon} alt="Delete Number"/>
      </button>
    </div>
  )
}

export default NumberDisplayer
