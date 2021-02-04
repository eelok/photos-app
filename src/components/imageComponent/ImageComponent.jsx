import "./image-component-style.scss";

const ImageComponent = ({imageURL, imageTitle}) => {
    return(
        <div className="gallery-item__image">
            <img src={imageURL} alt={imageTitle}/>
        </div>
    )
}
export default ImageComponent;