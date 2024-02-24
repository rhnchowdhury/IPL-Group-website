import FirstPart from "./Components/Others/FirstPart"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Others/Services"
import Works from "./Components/Others/Works"
import MidPart from "./Components/Others/MidPart"
import Footer from "./Components/Others/Footer"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <FirstPart></FirstPart>
      <Services></Services>
      <Works></Works>
      <MidPart></MidPart>
      <Footer></Footer>
    </div>
  )
}

export default App
