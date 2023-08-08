import { useEffect } from "react"

import useStore from "hooks/useStore"

import Item from "components/Item"
import ItemStatus from "components/ItemStatus"

const ItemList = () => {
  const items = useStore((state) => state.items)
  const itemsStatus = useStore((state) => state.itemsStatus)
  const fetchItemsStatus = useStore((state) => state.fetchItemsStatus)
  const reset = useStore((state) => state.reset)

  useEffect(() => {
    fetchItemsStatus()
  }, [fetchItemsStatus, itemsStatus.length])

  return (
    <div className="row g-0 mt-3 justify-content-evenly">
      {
        items.map(v => (
          <Item
            key={v.id}
            id={v.id}
            title={v.title}
            quantity={v.quantity}
            marked={v.marked}
          />
        ))
      }

      <div className="row g-0 mt-3 justify-content-evenly text-center">
        {
          !itemsStatus.length && (
            <div className="spinner-border text-primary" style={{ width: '5rem', height: '5rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )
        }
        {
          itemsStatus.length > 0 && (
            <>
              {
                items.map(item => (
                  <div key={item.id} className="col-md-2">
                    <ItemStatus status={itemsStatus.find(itemStatus => itemStatus.id === item.id).status} />
                  </div>
                ))
              }
              <button className="btn btn-danger w-25 mt-3" onClick={reset}>Reset</button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ItemList