const initalState = {
  productList: {
    products: [],
    error: null,
    loading: false
  },
  activeProduct: {
    product: null,
    error: null,
    loading: false
  },
  cart: {
    items: [],
    total: 0
  }
};

export default initalState;