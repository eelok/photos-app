import './list-of-photos-style.scss';
import {Link} from "react-router-dom";

const ListOfPhotos = ({photos}) => {

    return (
        <div className="container">
            {
                photos.map((photoItem, id) =>
                    <div key={id} className="gallery-item">
                        <Link to={`/photos/${photoItem.id}`}>
                            <img className="gallery-item__image"
                                 src={photoItem.photoURL}
                                 alt={photoItem.name}
                            />
                        </Link>
                        <div className="gallery-item__name">{photoItem.name}</div>
                    </div>
                )
            }
        </div>
    )
};

export default ListOfPhotos;