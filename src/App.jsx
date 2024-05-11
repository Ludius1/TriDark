import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import Hero from "./sections/hero/Hero"
import Categories from "./sections/categories/Categories"
import Listing from "./sections/listings/Listing"
import Performance from "./sections/performance/Performance"
import Location from "./sections/location/Location"
import Article from "./sections/article/Article"
import Footer from "./sections/footer/Footer"


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Listing/>
      <Performance/>
      <Location/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App