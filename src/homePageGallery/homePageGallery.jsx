import {PHOTO_GALLERY} from './photoGallery';
import './homePageGallery.css';

const HomePageGallery = () => {

    return (
        <div className="container">
            {
                PHOTO_GALLERY.map((photoItem, index) =>
                    <div className="gallery-container">
                        <div className="gallery-item">
                            <div className="image">
                                <img key={index} src={photoItem.imageURL} alt="photoUrl"/>
                            </div>
                            <div className="name">{photoItem.name}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default HomePageGallery;