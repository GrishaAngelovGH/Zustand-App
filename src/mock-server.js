import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

mock.onGet("/status").reply(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        [
          { id: 1, status: "available" },
          { id: 2, status: "available" },
          { id: 3, status: "limited" },
          { id: 4, status: "limited" },
          { id: 5, status: "available" }
        ]
      ])
    }, 5000)
  })
})