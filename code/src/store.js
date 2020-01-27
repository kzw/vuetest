import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { RESET_ERRORS, SAVE_ERROR, SAVE_PREFS, SET_PREFS, SET_SIGNED_IN, SET_USERNAME,
  SHOW_SPINNER, HIDE_SPINNER } from './consts'
import { url } from './url'

Vue.use(Vuex)

export const mutations = {
  [HIDE_SPINNER] (state) { state.spinner = false },
  [RESET_ERRORS] (state) { state.errors = [] },
  [SAVE_ERROR] (state, error, e) {
    state.errors.push(error)
    if (e && process.env.NONPROD) console.error(e)
  },
  [SET_USERNAME] (state, username) { state.username = username },
  [SET_PREFS] (state, prefs) { state.prefs = prefs == null ? {} : prefs },
  [SET_SIGNED_IN] (state) { state.signedIn = true },
  [SHOW_SPINNER] (state) { state.spinner = true }
}

export const actions = {
  [SAVE_PREFS] ({ commit }, prefs) {
    commit(SHOW_SPINNER)
    axios.post(url.me, prefs).then(() => { commit(SET_PREFS, prefs) }
    ).catch((e) => { commit(SAVE_ERROR, 'error saving preferences to the server', e) }
    ).finally(() => { commit(HIDE_SPINNER) })
  }
}

export default new Vuex.Store({
  state: {
    errors: [],
    phone: null,
    prefs: {},
    spinner: false,
    username: '--',
    signedIn: false
  },
  mutations,
  actions,
  getters: {
    errors: state => state.errors,
    phone: state => state.phone,
    prefs: state => state.prefs,
    signedIn: state => state.signedIn,
    spinner: state => state.spinner,
    username: state => state.username
  }
})
