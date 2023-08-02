import useStore from "hooks/useStore"

function App() {
  const items = useStore((state) => state.items)

  return (
    <div className="row g-0 justify-content-center">
      <div className="col-md-6">
        <h1 className="text-center">Zustand App</h1>
        <p className="text-center">Items count: {items.length}</p>
      </div>
    </div>
  );
}

export default App;
