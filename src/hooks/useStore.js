import { create } from "zustand"

const useStore = create(() => ({
  items: [
    { id: 1, title: "Item 1", quantity: 0, marked: false },
    { id: 2, title: "Item 2", quantity: 0, marked: false },
    { id: 3, title: "Item 3", quantity: 0, marked: false },
    { id: 4, title: "Item 4", quantity: 0, marked: false },
    { id: 5, title: "Item 5", quantity: 0, marked: false }
  ]
}))

export default useStore