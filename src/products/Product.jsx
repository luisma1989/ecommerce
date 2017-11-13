import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Product = ({
  _id,
  name,
  desciption,
  image,
  price,
  deliveryStimate,
  category
}) => {
  return (
    <div className='col-xs-12 col-sm-6 col-lg-4'>
      <div className='card'>
        <Link to={`/detail/${_id}`}>
          <img className='card-img-top' width='100%' src={image} alt={desciption}/>
        </Link>
        <div>
          <Link to={`/detail/${_id}`}>
            <h4 className='card-title'>{name}</h4>
          </Link>
          <p className='card-text'>{desciption}</p>
        </div>
        <ul className='list-group list-groip-flush'>
          <li className='list-group-item'>
            <strong>{price} &euro;</strong>
          </li>
          <li className='list-group-item'>
            <strong>Entrega: </strong>{deliveryStimate}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-pill badge info'>{category}</span>
          </li>
        </ul>
        <div className='card-block'>
          <button className='btn btn-primary'>
            <span className='fa fa-cart-plus'>Añadir al carrito</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  desciption: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  deliveryStimate: PropTypes.string,
  category: PropTypes.string
}

export default Product;
