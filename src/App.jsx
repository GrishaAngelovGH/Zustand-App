import Header from "components/Header"
import ItemList from "components/ItemList"

function App() {
  return (
    <div className="bg-gray-200 flex flex-col min-h-screen">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
