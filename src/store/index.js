import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {

  },
  getters: {
  },
  mutations: {
    // [types.SET_PLAYERS] (state, players) {
    //   state.players = players.filter((player) => {
    //     return player.length > 0
    //   })
    // }
  },
  actions: {
    // setPlayers ({ commit }, players) {
    //   commit(types.SET_PLAYERS, players)
    // }
  }
})

