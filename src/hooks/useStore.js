import { create } from "zustand"
import { persist } from 'zustand/middleware'
import axios from "axios"

const useStore = create(
  persist(
    set => ({
      items: [
        { id: 1, title: "Item 1", quantity: 0, marked: false },
        { id: 2, title: "Item 2", quantity: 0, marked: false },
        { id: 3, title: "Item 3", quantity: 0, marked: false },
        { id: 4, title: "Item 4", quantity: 0, marked: false },
        { id: 5, title: "Item 5", quantity: 0, marked: false }
      ],
      itemsStatus: {},
      incrementQty: id => {
        set(state => {
          const newItems = [...state.items]
          const item = newItems.find(v => v.id === id)
          item.quantity += 1

          return ({
            ...state,
            items: newItems
          })
        })
      },
      decrementQty: id => {
        set(state => {
          const newItems = [...state.items]
          const item = newItems.find(v => v.id === id)

          if (item.quantity > 0) {
            item.quantity -= 1
          }

          return ({
            ...state,
            items: newItems
          })
        })
      },
      markItem: id => {
        set(state => {
          const newItems = [...state.items]
          const item = newItems.find(v => v.id === id)
          item.marked = !item.marked

          return ({
            ...state,
            items: newItems
          })
        })
      },
      fetchItemsStatus: async () => {
        const { data } = await axios.get("/status")

        const status = data.reduce((a, b) => ({ ...a, [b.id]: b }), {})

        set({ itemsStatus: status })
      },
      reset: () => {
        set(state => state.itemsStatus = {})

        set(state => state.items = [
          { id: 1, title: "Item 1", quantity: 0, marked: false },
          { id: 2, title: "Item 2", quantity: 0, marked: false },
          { id: 3, title: "Item 3", quantity: 0, marked: false },
          { id: 4, title: "Item 4", quantity: 0, marked: false },
          { id: 5, title: "Item 5", quantity: 0, marked: false }
        ])
      }
    }),
    {
      name: 'item-storage'
    }
  )
)

export default useStore