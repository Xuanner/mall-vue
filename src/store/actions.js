import {UPDATE_SHOW_MAIN_NAV, ADD_CART, CHANGE_CHECKED, ALL_CKECKED} from './mutationType'

const actions = {
  [UPDATE_SHOW_MAIN_NAV]({commit}, info) {
    commit(UPDATE_SHOW_MAIN_NAV, info);
    
  },
  [ADD_CART]({commit}, info) {
    return new Promise((resolve) => {
      commit(ADD_CART, info)
      resolve('添加成功');
    })
  },
  [CHANGE_CHECKED]({commit}, id) {
    commit(CHANGE_CHECKED, id);
  },
  [ALL_CKECKED]({commit, getters}) {
    commit(ALL_CKECKED, getters.isAllSelect)
  }
}

export default actions;