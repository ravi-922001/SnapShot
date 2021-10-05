import React, {useState, useEffect} from 'react'
import './App.css';
import { photoData } from './photoData';
import Picture from './Picture';

function App() {
  
  const [imageData, setImageData] = useState(photoData);

  return (
    <div className="App">
      <div className="snapshot">
        {imageData.map(data => <Picture title={data.title} link={data.link} />)}
      </div>
    </div>
  );
}

export default App;
