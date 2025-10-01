import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Cards title="First Card" des="This is the first card and this is using props"/>
      <Cards title="Second Card" des="This is the second card and this is using props"/>
      <Cards title="Third Card" des="This is the third card and this is using props"/>
      <Cards title="Fourth Card" des="This is the fourth card and this is using props"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
