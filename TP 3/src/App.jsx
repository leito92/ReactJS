import List from "./components/List";

function App() {
  const products = {
    "producto #1": {
        description: "bla bla bla bla bla.",
        price: 0,
        sku: "1q2w3e",
        stock: 0
    },
    "producto #2": {
        description: "bla bla bla bla bla.",
        price: 0,
        sku: "1q2w3e",
        stock: 0
    },
    "producto #3": {
        description: "bla bla bla bla bla.",
        price: 0,
        sku: "1q2w3e",
        stock: 0
    }
  };

  return (
    <List data={products}/>
  );
}

export default App;