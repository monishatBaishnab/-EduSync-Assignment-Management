import { Outlet } from "react-router-dom"
import Navigation from "./layouts/comon/navigation/Navigation"

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
