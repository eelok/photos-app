import "./photo-page-style.scss";
import {PHOTO_GALLERY} from "../../homePageGallery/photoGallery";


const PhotoPage = ({match}) => {
    const photoId = +match.params.id;
    console.log(photoId);

    const [photoObj] = PHOTO_GALLERY.filter(photoOjb => photoOjb.id === photoId);
    console.log(photoObj);

    return (
        <img
            src={photoObj.photoURL} alt={photoObj.name}
        />
    )
};

export default PhotoPage;