import carouselImage1 from "../../assets/images/carousel images/carousel-image-1.jpg"
import carouselImage2 from "../../assets/images/carousel images/carousel-image-2.jpg"
import carouselImage3 from "../../assets/images/carousel images/carousel-image-3.png"
import carouselImage4 from "../../assets/images/carousel images/carousel-image-4.png"
import carouselImage5 from "../../assets/images/carousel images/carousel-image-5.png"
import COCLogo from "../../assets/images/COC KNUST LOGO.png"
import {useState, useRef, useEffect} from "react"
import "../../Styles/landing page/Carousel.css"

function Carousel() {  
  const images = useRef([carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5])
  const carousel = useRef()
  const currentImageSlide = useRef()
  const overflow = useRef()
  const [current, setCurrent] = useState(0)

  let interval

  const resetCarousel = (scrollAmount) => {
    if (interval) clearInterval(interval)

    const arrangedImages = images.current
    if (current === 0 && scrollAmount < 0) {
      overflow.current  = images.current.length - 1
      arrangedImages.unshift(images.current[overflow.current])

    } else if (current === images.current.length - 1 && scrollAmount > 0) {
      overflow.current = 0
      arrangedImages.push(images.current[overflow.current])
    }

    let n
    if (scrollAmount < 0) {
      n = current - 1
    } else {
      n = (current + 1) % images.current.length
    }

    images.current = arrangedImages
    setCurrent(n < 0 ? images.length - 1 : n)

    // interval = setInterval(() => {
    //   resetCarousel(carousel.current.clientWidth)
    // }, 10000)
  }

  const carouselNavRight = () => {
    resetCarousel(carousel.current.clientWidth)
  }

  const carouselNavLeft = () => {
    resetCarousel(-carousel.current.clientWidth)
  }

  useEffect(() => {
    console.log(overflow)
    carousel.current.scrollLeft = currentImageSlide.current.offsetLeft

    // if(overflow.current) images.current.filter((image, index) => index !== overflow.current + 1)
  })

  return(
    <div id="top-section">
      <nav id="nav-bar">
        <img src={COCLogo} alt="" id="church-logo"/>
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
        <div id="carousel-images-block" ref={carousel}>
          {images.current.map((image, index) => <img key={index} src={image} alt="" className="carousel-image" ref={image === images.current[current] ? currentImageSlide : null}/>)}
        </div>
        <button id="carousel-nav-right" className="carousel-nav" onClick={carouselNavRight}>&gt;</button>
        <button id="carousel-nav-left" className="carousel-nav" onClick={carouselNavLeft}>&lt;</button>
      </div>
    </div>
  )
}

export default Carousel