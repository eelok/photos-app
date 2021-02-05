import ImageComponent from "../imageComponent/ImageComponent";
import './list-of-images-style.scss';

const ListOfImages = ({photos}) => {

    return (
        <>
            {
                photos.map((photoItem, index) =>
                    <div key={index} className="gallery-item">
                        <ImageComponent imageURL={photoItem.imageURL} imageTitle={photoItem.name}/>
                        <div className="gallery-item__name">{photoItem.name}</div>
                    </div>
                )
            }
        </>
    )


}

export default ListOfImages;