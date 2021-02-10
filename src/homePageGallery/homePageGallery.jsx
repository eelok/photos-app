import {PHOTO_GALLERY} from './photoGallery';
import ListOfPhotos from "../components/listOfImages/listOfPhotos";

const HomePageGallery = () => {

    return (
        <ListOfPhotos photos={PHOTO_GALLERY}/>
    )
}

export default HomePageGallery;