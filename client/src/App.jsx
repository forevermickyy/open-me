
import Buttons from "./components/Buttons"
import FaqList from "./components/faq/FaqList"
import Footer from "./components/Footer"
import Gridcards from "./components/Gridcards"
import Headings from "./components/Headings"
import Nav from "./components/Nav"
import Rating from "./components/Rating"
import Slide from "./components/Slide"


function App() {
  

  return (
    <>
      <div className="w-full bg-gradient-to-b from-purple-950 via-transparent to-purple-50">
      <Nav />
      <Rating/>
      <Headings/>
      <Slide/>
      <Buttons/>
      <Gridcards/>
      <FaqList/>
      <Footer/>
      
      </div>
    </>
  )
}

export default App
