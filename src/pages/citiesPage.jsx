import React from 'react';
import {PHOTO_GALLERY as photoObjects} from './../homePageGallery/photoGallery';
import ListOfImages from "../components/listOfImages/listOfImages";

const CitiesPage = ({match}) => {
    const optedCity = match.params.city;

    let photoObj = photoObjects.filter(photoObj =>
        photoObj.tags && photoObj.tags.includes(optedCity.toLowerCase())
    );

    return (
        <ListOfImages photos={photoObj}/>
    )
}
export default CitiesPage;