import carouselImage1 from "../../assets/images/carousel images/carousel-image-1.jpg"
import carouselImage2 from "../../assets/images/carousel images/carousel-image-2.jpg"
import carouselImage3 from "../../assets/images/carousel images/carousel-image-3.png"
import carouselImage4 from "../../assets/images/carousel images/carousel-image-4.png"
import carouselImage5 from "../../assets/images/carousel images/carousel-image-5.png"
import COCLogo from "../../assets/images/COC KNUST LOGO.png"
import {useState, useCallback, useEffect} from "react"
import "../../Styles/landing page/Carousel.css"

function Carousel() {  
  const images = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5]
  const [currentImage, setCurrentImage] = useState(1)

  const timeout = useCallback(setTimeout(() => {
    setCurrentImage((state) => (state + 1) % 5)
  }, 3000), [currentImage])

  const carouselNavRight = () => {
    clearTimeout(timeout)
    setCurrentImage(state => (state+1)%5)
  }

  const carouselNavLeft = () => {
    clearTimeout(timeout)
    setCurrentImage(state => {
      const n = (state - 1) % 5
      return n >= 0 ? n :  5 + n
    })
  }
  
  return (
    <div id="top-section">
      <nav id="nav-bar">
        <img src={COCLogo} alt="" id="church-logo" />
        <div id="nav-options-box">
          <a href="/" className="nav-option">Home</a>
          <a href="/" className="nav-option">Sermons</a>
          <a href="/" className="nav-option">Events</a>
          <a href="/" className="nav-option">Visit Us</a>
          <a href="/" className="nav-option">Contact Us</a>
        </div>
        <a href="/" className="nav-option" id="community-nav">Community</a>
      </nav>
      <div id="carousel">
        <div id="carousel-images-block">
          {images.map((image, index) => <img key={index} src={image} alt="" className="carousel-image" id={ index === currentImage? "current-carousel-image" : ""} />)}
        </div>
        <button id="carousel-nav-right" className="carousel-nav" onClick={carouselNavRight}>&gt;</button>
        <button id="carousel-nav-left" className="carousel-nav" onClick={carouselNavLeft}>&lt;</button>
      </div>
    </div>
  )
}

export default Carousel