import { useState } from 'react'
import './App.css'
import FavoriteColor from './Component/FavoriteColor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <FavoriteColor/>
    
    </>
  )
}

export default App
