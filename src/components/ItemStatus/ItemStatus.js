const statuses = {
  available: 'bg-success text-white p-2 rounded',
  limited: 'bg-warning text-white p-2 rounded'
}

const ItemStatus = ({ status }) => (
  <div className={statuses[status]}>
    {status.toUpperCase()}
  </div>
)

export default ItemStatus