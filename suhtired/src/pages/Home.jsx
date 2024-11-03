import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentGrid from '../components/ContentGrid'

function Home() {
  return (
    <div>
      <>
      <Header />
      <div className="content">
      <ContentGrid />
      </div>
      <Footer />
      </>
    </div>
  )
}

export default Home