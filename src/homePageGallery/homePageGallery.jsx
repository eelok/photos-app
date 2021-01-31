import PHOTO_GALLERY from './photoGallery';
import './homePageGallery.css';

const HomePageGallery = () => {

    const photoItems = PHOTO_GALLERY;

    return (
        <div className="container">
            {
                photoItems.map((photoItem, index) =>
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