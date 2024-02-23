
export default function Defaultprop({title : newname , image='not found.jpg' , price='Not available'}) {

  let title = "flower Card";
  return (
    <div>
      <div>
            <h3>{title}</h3>
            <div className='card'>
                <img src={image} />
                <h2>{newname}</h2>
                <p className='price'>{price}$</p>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

//The first default method
// Defaultprop.defaultProps = {
//   image : 'not found.jpg' ,
//   price : 'Not available'

// }