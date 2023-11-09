import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Navigation from "./layouts/comon/navigation/Navigation"
import Footer from "./layouts/comon/footer/Footer"
import Loading from "./pages/Loading/Loading";
import { useEffect } from "react";

function App() {
  const { state } = useNavigation();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <Navigation />
      {state === 'loading' ? <Loading /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
