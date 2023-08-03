const Item = ({ title, quantity, marked }) => {
  return (
    <div className="col-md-2 border border-3 border-primary rounded p-2 shadow bg-light">
      <p className="fw-bold">Title: {title}</p>
      <p className="fw-bold">Quantity: {quantity}</p>
      <p className="fw-bold">Marked: {`${marked}`}</p>
    </div>
  )
}

export default Item