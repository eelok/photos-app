import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePageGallery from "./homePageGallery/homePageGallery";
import NavigationComponent from "./navigation/navigationComponent";


function App() {
    return (
        <div className="App">
            <NavigationComponent/>
            <Switch>
                {/*<Route exact={true} path="/" component={HomePageGallery}/>*/}
            </Switch>
        </div>
    );
}

export default App;
