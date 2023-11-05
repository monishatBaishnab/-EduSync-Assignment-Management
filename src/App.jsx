import { Outlet, useNavigation } from "react-router-dom"
import Navigation from "./layouts/comon/navigation/Navigation"
import Footer from "./layouts/comon/footer/Footer"
import Loading from "./pages/Loading/Loading";

function App() {
  const { state } = useNavigation();
  return (
    <>
      <Navigation />
      {state === 'loading' ? <Loading /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
