import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { requestMovies } from './services/api'
import MovieList from './components/MovieList/MovieList'
import { createLogger } from 'vite'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(null)


  useEffect(()=>{
async function fetchMovies () {
  try {
    const data = await requestMovies()
    setMovies(data)
  } catch(error){
    console.log("error")
  }finally{
    console.log('Finally')
  }
}



setMovies(requestMovies())
  },[movies])



  return (
    <>
  <MovieList movies={movies.results} />
    </>
  )
}

export default App
