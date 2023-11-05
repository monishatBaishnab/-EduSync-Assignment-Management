import { Outlet } from "react-router-dom"
import Navigation from "./layouts/comon/navigation/Navigation"
import Footer from "./layouts/comon/footer/Footer"

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
