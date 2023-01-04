import carouselImage1 from "../../assets/images/carousel images/carousel-image-1.jpg"
import carouselImage2 from "../../assets/images/carousel images/carousel-image-2.jpg"
import carouselImage3 from "../../assets/images/carousel images/carousel-image-3.png"
import carouselImage4 from "../../assets/images/carousel images/carousel-image-4.png"
import carouselImage5 from "../../assets/images/carousel images/carousel-image-5.png"
import COCLogo from "../../assets/images/COC KNUST LOGO.png"
import menuIcon from "../../assets/images/menu-icon.svg"
import {useState, useRef, useEffect} from "react"
import "../../Styles/landing page/Carousel.css"

function Carousel() {  
  const images = useRef([carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5])
  const carousel = useRef()
  const currentImageSlide = useRef()
  const timeout = useRef()
  const ignoreScroll = useRef(false)
  const menu = useRef()
  const [current, setCurrent] = useState(0)

  if (ignoreScroll.current) setTimeout(() => ignoreScroll.current = false, 700)
  
  if (timeout.current) clearTimeout(timeout.current)
  const resetCarousel = (scrollAmount) => {

    if (current === 0 && scrollAmount < 0) {
      setCurrent(-1)
      return
    } else if (current === images.current.length - 1 && scrollAmount > 0) {
      setCurrent(images.current.length)
      return
    }

    let n
    if (scrollAmount < 0) {
      n = current - 1
    } else if(scrollAmount > 0){
      n = (current + 1) % images.current.length
    }

    setCurrent(n < 0 ? images.current.length - 1 : n)
  }

  const carouselNavRight = () => {
    if (!ignoreScroll.current) {
      resetCarousel(1)
      ignoreScroll.current = true
    }
  }

  const carouselNavLeft = () => {
    if (!ignoreScroll.current) {
      resetCarousel(-1)
      ignoreScroll.current = true
    }
  }

  timeout.current = setTimeout(() => carouselNavRight(), 10000)

  const openMenu = (e) => {
    menu.current.classList.add("active")
  }

  const closeMenu = () => {
    menu.current.classList.remove("active")
  }

  useEffect(() => {
    carousel.current.scrollLeft = currentImageSlide.current.offsetLeft
    carousel.current.style.scrollBehavior = "smooth"

    if (current === -1) {
      setTimeout(() => {
        carousel.current.style.scrollBehavior = "auto"
        setCurrent(images.current.length - 1)
      }, 700)
    } else if (current === images.current.length) {
      setTimeout(() => {
        carousel.current.style.scrollBehavior = "auto"
        setCurrent(0)
      }, 700)
    }
  }, [current])

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
        <a href="/" className="nav-option community-nav">Community</a>
        <div id="menu">
          <img src={menuIcon} alt="open menu" srcset="" id="menu-icon" onClick={openMenu} ref={menu} />
          <div id="menu-options">
            <a href="/" className="nav-option">Home</a>
            <a href="/" className="nav-option">Sermons</a>
            <a href="/" className="nav-option">Events</a>
            <a href="/" className="nav-option">Visit Us</a>
            <a href="/" className="nav-option">Contact Us</a>
            <span id="menu-close-btn" onClick={closeMenu}>X</span>
          </div>
        </div>
      </nav>
      <div id="carousel">
        <div id="carousel-images-block" ref={carousel}>
          <img src={images.current[images.current.length - 1]} alt="" ref={current === -1 ? currentImageSlide : null} className="carousel-image" />
          {images.current.map((image, index) => <img key={index} src={image} alt="" className="carousel-image" ref={image === images.current[current] ? currentImageSlide : null} />)}
          <img src={images.current[0]} className="carousel-image" ref={current === images.current.length ? currentImageSlide : null} alt=""/>
        </div>
        <button id="carousel-nav-right" className="carousel-nav" onClick={carouselNavRight}>&gt;</button>
        <button id="carousel-nav-left" className="carousel-nav" onClick={carouselNavLeft}>&lt;</button>
      </div>
    </div>
  )
}

export default Carousel