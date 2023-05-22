
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api'
import { useState } from 'react';
import ImagesList from './components/ImagesList';
function App() {

  const [images, setImages] = useState([])  
  const handleSubmit =async (term)=>{
    const result = await searchImages (term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchHeader search= {handleSubmit}/>
      <ImagesList imagesPlaceholder= {images}/>
    </div>
  );
}

export default App;
