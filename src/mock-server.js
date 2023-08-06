import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

mock.onGet("/status").reply(200, [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "limited" },
  { id: 4, status: "limited" },
  { id: 5, status: "available" }
])