import {PHOTO_GALLERY} from './photoGallery';
import ListOfImages from "../components/listOfImages/listOfImages";

const HomePageGallery = () => {

    return (
        <ListOfImages photos={PHOTO_GALLERY}/>
    )
}

export default HomePageGallery;