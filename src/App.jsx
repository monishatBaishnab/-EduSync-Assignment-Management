import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Loading from "./pages/Loading/Loading";
import { useEffect } from "react";
import Navigation from "./components/SharedComponents/Navigation/Navigation";
import Footer from "./components/SharedComponents/Footer";

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
