import React from 'react'
import "../../Styles/landing page/Footer.css"
import NewLetter from './NewLetter'
import QuickLinks from './QuickLinks'

function Footer() {
  return (
    <div>
      <AboutFooter />
      <QuickLinks/>
      <LatestNews />
      <NewLetter />
      <Floor/>
    </div>
  )
}

export default Footer