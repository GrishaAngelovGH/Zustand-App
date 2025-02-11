import { useEffect } from "react"

import useStore from "hooks/useStore"

import Item from "components/Item"
import ItemStatus from "components/ItemStatus"

const isEmpty = obj => !Object.keys(obj).length

const ItemList = () => {
  const items = useStore((state) => state.items)
  const itemsStatus = useStore((state) => state.itemsStatus)
  const fetchItemsStatus = useStore((state) => state.fetchItemsStatus)
  const reset = useStore((state) => state.reset)

  useEffect(() => {
    fetchItemsStatus()
  }, [fetchItemsStatus, itemsStatus])

  return (
    <div className="flex-1 h-full">
      <div className="flex-col">
        <div className="flex mt-3 justify-evenly">
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
        </div>

        <div className="flex justify-center mt-5">
          {
            isEmpty(itemsStatus) && (
              <div className="inline-block border-r-transparent rounded-full animate-spin border-4 border-blue-500 w-[5rem] h-[5rem]" role="status">
                <span className="hidden">Loading...</span>
              </div>
            )
          }
          {
            !isEmpty(itemsStatus) && (
              <div className="flex flex-col gap-5 items-center w-full">
                <div className="flex justify-around w-full">
                  {
                    items.map(item => (
                      <ItemStatus key={item.id} status={itemsStatus[item.id].status} />
                    ))
                  }
                </div>
                <button className="bg-red-500 text-white rounded-md w-[100px] mt-3 font-bold cursor-pointer p-2 text-2xl" onClick={reset}>Reset</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ItemList