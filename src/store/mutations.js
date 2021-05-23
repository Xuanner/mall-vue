import {UPDATE_SHOW_MAIN_NAV, ADD_CART, CHANGE_CHECKED, ALL_CKECKED} from './mutationType'

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
      info.checked = false;
      state.cartList.push(info);
    }
  },
  [CHANGE_CHECKED](state, id) {
    let findInfo =  state.cartList.find(item => item.id == id);
    findInfo.checked = !findInfo.checked;
  },
  [ALL_CKECKED](state, isAllSelect) {
    isAllSelect ? state.cartList.forEach(item => item.checked = false) : state.cartList.forEach(item => item.checked = true);

  }
}

export default mutations;