import React, { PropTypes } from 'react';
import CartItem from './cartItem';
import uuid from 'uuid';

const CartItemList = ({
  items,
  onRemoveitem
})  => (
  <div className='list-group'>
    {
      items.map(item => (
        <CartItem 
          key={uuid.v4()}
          onRemoveitem={onRemoveitem}
          {...item}
        />  
      )).reverse()
    }
  </div>
)

CartItemList.defaultProps = {
  items: []
}

CartItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveitem: PropTypes.func.isRequired
}

export default CartItemList;