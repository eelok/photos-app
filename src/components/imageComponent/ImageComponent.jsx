import "./image-component-style.scss";

const ImageComponent = ({imageURL, imageTitle}) => {
    return (
        <img className="gallery-item__image" src={imageURL} alt={imageTitle}/>
    )
}
export default ImageComponent;