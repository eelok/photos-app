import "./photo-page-style.scss";
import {PHOTO_GALLERY} from "../../homePageGallery/photoGallery";
import printInFrame from "../../assets/prints-example.jpg";

const PhotoPage = ({match}) => {

    const photoId = +match.params.id;
    const [photoObj] = PHOTO_GALLERY.filter(photoOjb => photoOjb.id === photoId);

    const products = [
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
        {title: "print-in-frame", icon: printInFrame},
    ]

    return (
        <div className="product-container">
            <div className="product-art">
                <img className="art" src={photoObj.photoURL} alt={photoObj.name}/>
            </div>
            <div className="product-sidebar">
                <h1 className="product-sidebar__title">{photoObj.name}</h1>
                <h3 className="product-sidebar__category">category: {photoObj.category}</h3>
                <h4 className="product-sidebar__tags">
                    {
                        photoObj.tags.map((tag, index) =>
                            <p className="tag" key={index}>{tag}</p>
                        )
                    }
                </h4>
                <h2 className="products-gallery__title">you may like</h2>
                <div className="products-gallery">
                    {
                        products.map((product, index) =>
                            <img className="product-icon" src={product.icon} alt={product.title}/>
                        )
                    }
                </div>
            </div>
        </div>
        // <section className="image-hero__container">
        //     <div className="image-hero__box-image">
        //         <img className="image-hero__image" src={photoObj.photoURL} alt={photoObj.name}/>
        //     </div>
        //     <div className="image-hero__box-info">
        //         <div className="box-info__text">
        //             <h2 className="image-hero__name">{photoObj.name}</h2>
        //             <h4 className="image-hero__category">category: <span
        //                 className="image-hero__category-span">{photoObj.category}</span></h4>
        //             <div className="image-hero__tags">
        //                 {
        //                     photoObj.tags.map((item, index) =>
        //                         <p className="image-hero__tag" key={index}>{item}</p>
        //                     )}
        //             </div>
        //         </div>
        //
        //         <div className="box-info__products">
        //             {
        //                 products.map((product, index) =>
        //                     <img className="box-info__product-img" key={index} src={product.icon} alt={product.title}/>
        //                 )
        //             }
        //         </div>
        //     </div>
        // </section>
    )
};

export default PhotoPage;