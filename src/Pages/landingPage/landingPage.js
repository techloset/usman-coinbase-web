import React from 'react'
import Header from '../../Components/header/header'
import Welcome from '../../Components/welcome section/welcome'
import Rates from '../../Components/rates section/Rates'
import Experience from '../../Components/experience/experience'
import Trade from '../../Components/trade/trade'
import Blog from '../../Components/blog/blog'
import Client from '../../Components/clients/client';
import Download from '../../Components/download/download';
import Newsletter from '../../Components/newsletter/newsletter';
import Footer from '../../Components/footer/footer';
import DownloadContent from '../../Components/downloadContent/DownloadContent'
const landingPage = () => {
  return (
    <div>
       <Header></Header>
   <Welcome></Welcome>
   <Rates></Rates>
   <Experience></Experience>
   <Trade></Trade>
   <Blog></Blog>
   <Client></Client>
   <DownloadContent/>
   <Download></Download>
   <Newsletter></Newsletter>
   <Footer></Footer>
    </div>
  )
}

export default landingPage
