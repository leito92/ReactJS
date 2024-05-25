import List from "./components/List";
import data from "./data/products.json";

function App() {
  return (
    <List products={data}/>
  );
}

export default App;