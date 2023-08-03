import useStore from "hooks/useStore"

import Item from "components/Item"

const ItemList = () => {
  const items = useStore((state) => state.items)

  return (
    <div className="row g-0 mt-3 justify-content-evenly">
      {
        items.map(v => (
          <Item
            key={v.id}
            title={v.title}
            quantity={v.quantity}
            marked={v.marked}
          />
        ))
      }
    </div>
  )
}

export default ItemList