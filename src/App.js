import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePageGallery from "./homePageGallery/homePageGallery";
import NavigationComponent from "./components/navigation/navigationComponent";
import CitiesPage from "./pages/citiesPage";


function App() {
    return (
        <div className="App">
            <NavigationComponent/>
            <Switch>
                <Route exact={true} path="/" component={HomePageGallery}/>
                <Route path='/city/:city' component={CitiesPage}/>
            </Switch>
        </div>
    );
}

export default App;
