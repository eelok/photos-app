import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePageGallery from "./homePageGallery/homePageGallery";
import NavigationComponent from "./components/navigation/navigationComponent";
import CitiesPage from "./pages/citiesPage/citiesPage";
import PhotoPage from "./pages/photoPage/photoPage";


function App() {
    return (
        <div className="App">
            <NavigationComponent/>
            <Switch>
                <Route exact={true} path="/" component={HomePageGallery}/>
                <Route path='/city/:city' component={CitiesPage}/>
                <Route path='/photos/:id' component={PhotoPage}/>
            </Switch>
        </div>
    );
}

export default App;
