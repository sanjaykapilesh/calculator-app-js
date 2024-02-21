const NumberDisplayer = ({number, onDeleteClick}) => {
  return (
    <div style={{ display: 'flex' }}>
      <p>{number}</p>
      <button onClick={onDeleteClick}>x</button>
    </div>
  )
}

export default NumberDisplayer
