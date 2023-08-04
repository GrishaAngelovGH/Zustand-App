import useStore from "hooks/useStore"

const Item = ({ id, title, quantity, marked }) => {
  const incrementQty = useStore((state) => state.incrementQty)
  const decrementQty = useStore((state) => state.decrementQty)
  const markItem = useStore((state) => state.markItem)

  const handleIncrement = () => {
    incrementQty(id)
  }

  const handleDecrement = () => {
    decrementQty(id)
  }

  const handleMarkItem = () => {
    markItem(id)
  }

  return (
    <div className="col-md-2 border border-3 border-primary rounded p-2 shadow bg-light text-center">
      <p className="fw-bold">Title: {title}</p>
      <p className="fw-bold">Quantity: {quantity}</p>
      <p className="fw-bold">Marked: {`${marked}`}</p>

      <div className="row justify-content-around mt-3">
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

      <div className="row mt-3">
        <div className="col-md-12">
          <button
            className={`btn ${marked ? "btn-info text-white" : "btn-primary"} w-100 fs-3`}
            onClick={handleMarkItem}
          >
            {marked ? "Unmark" : "Mark"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item