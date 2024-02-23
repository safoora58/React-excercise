import './product.css';

function Product(props) {
    console.log(props);


    //props object destructuring
    //let {title, image, price} = props;
    // return (
    //     props.price < 300 &&
    //     <div>
    //         <h3>Product Card</h3>
    //         <div className='card'>
    //             <img src={image} />
    //             <h2>{title}</h2>
    //             <p className='price'>{price}</p>
    //             <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
    //             <button>Add to Cart</button>
    //         </div>
    //     </div>
    // )



//  روش اول استفاده شرطی از props
    return (
        props.price < 300 &&
        <div>
            <h3>Product Card</h3>
            <div className='card'>
                <img src={props.image} />
                <h2>{props.title}</h2>
                <p className='price'>{props.price}</p>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                <button>Add to Cart</button>
            </div>
        </div>
    )



//  روش دوم استفاده شرطی از props
    //     if(props.price < 300){
    //         return (
    //             <div>
    //                 <h3>Product Card</h3>
    //                 <div className='card'>
    //                     <img src={props.image} />
    //                     <h2>{props.title}</h2>
    //                     <p className='price'>{props.price}</p>
    //                     <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
    //                     <button>Add to Cart</button>       
    //                 </div>
    //             </div>
    //         )
    //     }

}







export default Product 