import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import { useState } from 'react'
import axios from 'axios'
import Results from './components/Results'

function App() {
  const [word, setWord] = useState('')
  const [photo, setPhoto] = useState([])

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.unsplash.com/search/photos?query=${word}&per_page=30&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`)
    .then(res => {
      const randomPhotos = 
      getRandomItems(res.data.results, 30);
      setPhoto(randomPhotos);
    })
  };
  
  const getRandomItems = (array, count) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results photo={photo} />
    </div>
  )
}

export default App
