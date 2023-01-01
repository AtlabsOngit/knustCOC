import carouselImage1 from "../../assets/images/carousel images/carousel-image-1.jpg"
import carouselImage2 from "../../assets/images/carousel images/carousel-image-2.jpg"
import carouselImage3 from "../../assets/images/carousel images/carousel-image-3.png"
import carouselImage4 from "../../assets/images/carousel images/carousel-image-4.png"
import carouselImage5 from "../../assets/images/carousel images/carousel-image-5.png"
import COCLogo from "../../assets/images/COC KNUST LOGO.png"
import {useState, useRef, useEffect} from "react"
import "../../Styles/landing page/Carousel.css"

function Carousel() {  
  const [images, setImages] = useState({
    allImages: [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5],
    currentImage: 0
  })

  const carousel = useRef()
  const currentImage = images.allImages[images.currentImage]
  let currentImageSlide = useRef()

  let interval

  console.log("render", images.allImages.indexOf(images.currentImage))

  const resetCarousel = (scrollAmount) => { 
    if (interval) clearInterval(interval)

    let n
    if (scrollAmount < 0) {
      n = images.allImages.indexOf(currentImage) - 1
    } else {
      n = (images.allImages.indexOf(currentImage) + 1) % images.length
    }

    const arrangedImages = images.allImages
    if (images.allImages.indexOf(currentImage) === 0) {
      const image = arrangedImages.pop()
      arrangedImages.unshift(image)

    } else if (images.allImages.indexOf(currentImage.current) === images.length - 1) {
      const image = arrangedImages.shift()
      arrangedImages.push(image)
    }
        
    setImages({
      ...images,
      currentImage: n < 0 ? images.length - 1 : n,
      allImages: arrangedImages
    })

    // carousel.current.scrollBy(scrollAmount, 0)

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
    carousel.current.scrollLeft = currentImageSlide.current.offsetLeft
  })
  
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
        <div id="carousel-images-block" ref={carousel}>
          {images.allImages.map((image, index) => <img key={index} src={image} alt="" className="carousel-image" id={image === currentImage ? "current-image" : ""} ref={image === currentImage? currentImageSlide: null } />)}
        </div>
        <button id="carousel-nav-right" className="carousel-nav" onClick={carouselNavRight}>&gt;</button>
        <button id="carousel-nav-left" className="carousel-nav" onClick={carouselNavLeft}>&lt;</button>
      </div>
    </div>
  )
}

export default Carousel