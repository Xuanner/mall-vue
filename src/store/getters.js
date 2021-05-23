const getters = {
  cartCount: (state) => {
    return state.cartList.length
  },
  isAllSelect: (state, getters) => {
    return getters.cartCount ? state.cartList.every(item => item.checked == true) : false;
  },
  totalPrice: (state) => {
    return state.cartList.reduce((value, {price, count, checked}) => {
      return value + (checked ? (price * count) : 0)
    }, 0)
  },
  selectCount: (state) => {
    return state.cartList.filter(item => item.checked == true).length
  }
}

export default getters