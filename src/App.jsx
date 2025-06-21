import { useState } from 'react'
import './App.css'
import page1Url from './assets/1.svg'
import page2Url from './assets/2.svg'
import page3Url from './assets/3.svg'
import page4Url from './assets/4.svg'
import page5Url from './assets/5.svg'
import page6Url from './assets/6.svg'
import page7Url from './assets/7.svg'
import page8Url from './assets/8.svg'
import page9Url from './assets/9.svg'
import page10Url from './assets/10.svg'
import page11Url from './assets/11.svg'
import page12Url from './assets/12.svg'
import page13Url from './assets/13.svg'

function App() {
  

  return (
    <>
      <div className='pages'>
          <img src={page1Url} className='page'></img>
          <img src={page2Url} className='page'></img>
          <img src={page3Url} className='page'></img>
          <img src={page4Url} className='page'></img>
          <img src={page5Url} className='page'></img>
          <img src={page6Url} className='page'></img>
          <img src={page7Url} className='page'></img>
          <img src={page8Url} className='page'></img>
          <img src={page9Url} className='page'></img>
          <img src={page10Url} className='page'></img>
          <img src={page11Url} className='page'></img>
          <img src={page12Url} className='page'></img>
          <img src={page13Url} className='page'></img>
      </div>
    </>
  )
}

export default App
