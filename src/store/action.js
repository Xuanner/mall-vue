import {UPDATE_SHOW_MAIN_NAV, ADD_CART} from './mutationType'

const actions = {
  [UPDATE_SHOW_MAIN_NAV]({commit}, info) {
    commit(UPDATE_SHOW_MAIN_NAV, info);
  },
  [ADD_CART]({commit}, info) {
    commit(ADD_CART, info)
  }
}

export default actions;