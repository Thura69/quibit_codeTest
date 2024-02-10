import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Main from './components/Main'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Information from './components/Information'
import { UpTop } from './components/theme/Uptop'

function App() {
  return (
    <>
    <Header/>
    <Slider/>
    <Main />
    <Blog/>
    <Information/>
    <Footer/>
    </>
  )
}

export default App