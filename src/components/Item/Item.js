import useStore from "hooks/useStore"

const Item = ({ id, title, quantity, marked }) => {
  const incrementQty = useStore((state) => state.incrementQty)
  const decrementQty = useStore((state) => state.decrementQty)

  const handleIncrement = () => {
    incrementQty(id)
  }

  const handleDecrement = () => {
    decrementQty(id)
  }

  return (
    <div className="col-md-2 border border-3 border-primary rounded p-2 shadow bg-light">
      <p className="fw-bold">Title: {title}</p>
      <p className="fw-bold">Quantity: {quantity}</p>
      <p className="fw-bold">Marked: {`${marked}`}</p>

      <div className="row justify-content-around">
        <div className="col-md-5">
          <button
            className="btn btn-primary w-100 fs-3"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="col-md-5">
          <button
            className="btn btn-primary w-100 fs-3"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item