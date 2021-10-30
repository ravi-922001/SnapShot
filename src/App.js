import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './App.css';
import Picture from './Picture';

function App() {
  const [search, setSearch] = useState('');
  const [imageData, setImageData] = useState([]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const client_ID = 'YDOem0iNmXcuLHk0ZM4UA4DimOsW3ThTRDJJccqcf7E';
    axios.get(`https://api.unsplash.com/search/photos/?query=`+search+`&per_page=49&client_id=${client_ID}`)
    .then(res => {
      console.log(res.data.results);
      setImageData(res.data.results);
    });
  }, [search])

  return (
    <div className="App">
      <div className="navbar">
        SnapShot
      </div>
      <div className="input">
        <input placeholder="Search here" onChange={searchHandler} value={search} />
      </div>
      <div className="snapshot">
        {imageData.map(data => <Picture key={data.id} title={data.alt_description} link={data.urls.regular} />)}
      </div>
    
    </div>
  );
}

export default App;
