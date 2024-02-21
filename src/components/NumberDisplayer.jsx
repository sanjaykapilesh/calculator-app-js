const NumberDisplayer = ({number, onDeleteClick}) => {
  return (
    <div className="box">
      <p>{number}</p>
      <button onClick={onDeleteClick}>x</button>
    </div>
  )
}

export default NumberDisplayer
