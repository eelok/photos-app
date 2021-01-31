
import './App.css';
import {Route} from 'react-router-dom';
import HomePageGallery from "./homePageGallery/homePageGallery";


function App() {
  return (
    <div className="App">
      <Route exact={true} path="/" component={HomePageGallery}/>
    </div>
  );
}

export default App;
