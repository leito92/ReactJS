import { Outlet } from "react-router-dom"
import Menu from "./components/Menu.jsx"

function App() {
  return (
    <>
      <Menu />
      <Outlet></Outlet>
    </>
  )
}

export default App
