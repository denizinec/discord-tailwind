import { useState } from 'react'
import './App.css'
import SideBar from './component/SideBar'
import Channel from './component/Channel'
import Content from './component/Content'

function App() {

  return (
    <>
      <div className='flex'>

        <SideBar/>
        <Channel/>
        <Content/>

      </div>
    </>
  )
}

export default App
