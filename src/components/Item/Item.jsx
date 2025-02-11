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
    <div className="border-3 border-blue-500 rounded-md p-2 shadow text-center">
      <ul className="bg-white border rounded-md text-2xl text-gray-600">
        <li className="border-b border-gray-600">Title: {title}</li>
        <li className="border-b border-gray-600">Quantity: {quantity}</li>
        <li>Marked: {`${marked}`}</li>
      </ul>

      <div className="flex gap-4 mt-3">
        <button
          className="bg-blue-500 text-white text-2xl rounded-md w-[100px] cursor-pointer"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white text-2xl rounded-md w-[100px] cursor-pointer"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>

      <div className="mt-3">
        <button
          className={`text-white rounded-md ${marked ? "bg-blue-400" : "bg-blue-500"} w-[100px] text-2xl cursor-pointer`}
          onClick={handleMarkItem}
        >
          {marked ? "Unmark" : "Mark"}
        </button>
      </div>
    </div>
  )
}

export default Item