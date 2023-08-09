import Header from "components/Header"
import ItemList from "components/ItemList"

function App() {
  return (
    <div className="row g-0 vh-100 bg-body-secondary">
      <div className="col-md-12">
        <Header />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
