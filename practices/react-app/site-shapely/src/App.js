import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header'
import Seo from './Component/Seo/Seo'
import Portfolio from './Component/Portfolio/Portfolio'
import Parallex from './Component/Parallex/Parallex'
import Limit from './Component/Limit/Limit'
import Latest from './Component/Latest/Latest'
import Customer from './Component/Customer/Customer'



export default function App() {
  return (
    <div>
      <Header />
      <Seo />
      <Portfolio />
      <Parallex />
      <Limit />
      <Latest/>
      <Customer/>
    </div>
  )
}


