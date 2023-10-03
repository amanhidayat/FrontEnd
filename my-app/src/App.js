import { Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavbarComp } from "./components/Navbar"
import { setData } from "./redux/cartSlice"

function App() {
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:2000/carts")
      const jsonData = await data.json()
      dispatch(setData(jsonData))

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <NavbarComp />
      <Heading>
      </Heading>
    </div>
  );
}

export default App;
