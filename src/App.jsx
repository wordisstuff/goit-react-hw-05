import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { requestMovies } from './services/api'
import MovieList from './components/MovieList/MovieList'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(null)


  useEffect(()=>{
setMovies(requestMovies())
  })



  return (
    <>
  <MovieList movies={movies} />
    </>
  )
}

export default App
