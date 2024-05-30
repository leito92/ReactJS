import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => { 
    fetch("https://6658ec85de346625136ae3f0.mockapi.io/products")
      .then((res) => res.json())
      .then((url) => setData(url)); 
  }, []);

  return (
    <List products={data}/>
  );
}

export default App;
