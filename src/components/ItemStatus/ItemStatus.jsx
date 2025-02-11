const statuses = {
  available: 'bg-green-600 text-white p-2 rounded-md font-bold',
  limited: 'bg-red-500 text-white p-2 rounded-md font-bold'
}

const ItemStatus = ({ status }) => (
  <div className={statuses[status]}>
    {status.toUpperCase()}
  </div>
)

export default ItemStatus