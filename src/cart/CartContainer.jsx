import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../actions/cartActions';
import CartItemList from './CartItemList';

class CartContainer extends Component {
  constructor (props) {
    super(props)

    this.handleOnRemoveitem = this.handleOnRemoveitem.bind(this)
  }

  async componentWillMount () {
    this.props.actions.loadCartItems();
  }

  handleOnRemoveitem (itemId) {
    this.props.actions.removeCartItems(itemId);
  }

  render() {
    return (
      <section className='container'>
        <CartItemList
          items={this.props.items}
          onRemoveitem={this.handleOnRemoveitem}
        />
        <hr/>
        <div className='row'>
          <p>Total: {this.props.total} &euro;</p>
        </div>
      </section>
    )
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
}

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number.isRequired
};

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);