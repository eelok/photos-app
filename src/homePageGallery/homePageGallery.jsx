import {PHOTO_GALLERY} from './photoGallery';
import './homePageGallery.css';
import ListOfImages from "../components/listOfImages/listOfImages";

const HomePageGallery = () => {

    return (
        <div className="container">
            <ListOfImages photos={PHOTO_GALLERY}/>
        </div>
    )
}

export default HomePageGallery;