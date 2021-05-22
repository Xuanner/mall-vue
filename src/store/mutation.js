import {UPDATE_SHOW_MAIN_NAV, ADD_CART} from './mutationType'

const mutations = {
  [UPDATE_SHOW_MAIN_NAV](state, info) {
    state.showMainNav = info;
  },
  [ADD_CART](state, info) {
    let findInfo = state.cartList.find(item => item.id == info.id);
    if(findInfo) {
      findInfo.count += 1;
    }else {
      info.count = 1;
      state.cartList.push(info);
    }
  }
}

export default mutations;