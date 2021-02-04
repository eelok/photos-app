import React from 'react';
import {PHOTO_GALLERY as photoObjects} from './../homePageGallery/photoGallery';

const CitiesPage = ({match}) => {
    const optedCity = match.params.city;

    let imgUrls = photoObjects.filter(photoObj =>
        photoObj.tags && photoObj.tags.includes(optedCity.toLowerCase())
    );

    return (
        <div>
            {imgUrls.map(photo =>
                <img src={photo.imageURL} alt=""/>
            )}
        </div>
    )
}
export default CitiesPage;