import './Spreadprop.css';


export default function Spreadprop({title : newname , image , price, children}) {

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
                {children}
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

Spreadprop.defaultProps = {
  image : 'not found.jpg'
}