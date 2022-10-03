import { useState } from 'react';
import Axios from 'axios';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  
  
  const callFlickr = ()=> {
    
    Axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=77650dbdae1464d7bd1a01c685f3ec93&text=${searchText}&format=json&nojsoncallback=1`)
    .then((response)=> {
      console.log(response.data);
        setResult(response.data.results);
    })
  } 



  
  
  return (
    <>
        <div className="container">
            <Input value={searchText} onChange={(e)=> setSearchText(e.target.value)}  placeholder='Search...' />
            <Button type='submit' primary onClick={callFlickr}>Get Photo</Button>
            {console.log(searchText)}
         </div>
         <div className="container">
                <div class="row text-center text-lg-start">
                    {result && result.map(() => {
                        return (
                            
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src="https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg"/>
                                    
                            
                        )
                    })}
                </div>

            </div>
         
          
    </>
  );
}

export default App;
