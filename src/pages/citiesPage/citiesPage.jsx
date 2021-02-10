import React from 'react';
import {PHOTO_GALLERY as photoObjects} from '../../homePageGallery/photoGallery';
import ListOfPhotos from "../../components/listOfImages/listOfPhotos";

const CitiesPage = ({match}) => {
    const optedCity = match.params.city;

    let photoObj = photoObjects.filter(photoObj =>
        photoObj.tags && photoObj.tags.includes(optedCity.toLowerCase())
    );

    return (
        <ListOfPhotos photos={photoObj}/>
    )
}
export default CitiesPage;