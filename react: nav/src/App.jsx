import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  )
}

export default App
