import React from 'react'
import Navbar from './Components/Navbar.jsx'
import HeaderImage from './Components/HeaderImage'
import Articles from './Components/Articles'
import ArticleCategory from './Components/ArticleCategory.jsx'
import Products from './Components/Products'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <>
      <h1 id="name">Spoko</h1>
      <HeaderImage title="NewsChannel" subTitle="Latest Updates" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:category" element={<ArticleCategory />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>


      <Footer />
    </>
  )
}

export default App
