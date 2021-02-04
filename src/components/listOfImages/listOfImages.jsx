import ImageComponent from "../imageComponent/ImageComponent";

const ListOfImages = ({photos}) => {

    return (
        <div>
            {
                photos.map((photoItem, index) =>
                    <div key={index} className="gallery-container">
                        <div className="gallery-item">
                            <ImageComponent imageURL={photoItem.imageURL} imageTitle={photoItem.name}/>
                            <div className="gallery-item__name">{photoItem.name}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )

}

export default ListOfImages;