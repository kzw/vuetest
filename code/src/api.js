import axios from 'axios'
import store from './store'
import { HIDE_SPINNER, SAVE_ERROR, SHOW_SPINNER } from './consts'

const request = function (method, endpoint, success, error, payload) {
  const _store = this.$store || store
  _store.commit(SHOW_SPINNER)
  const args = payload ? [endpoint, payload] : [endpoint]
  axios[method](...args).then((r) => {
    try {
      success.bind(this)(r)
    } catch (e) {
      _store.commit(SAVE_ERROR, error, e)
      throw e
    }
  }).catch((e) => {
    if (error && {}.toString.call(error) === '[object Function]') return error.bind(this)(e)
    _store.commit(SAVE_ERROR, error, e)
  }).finally(() => { _store.commit(HIDE_SPINNER) })
}

export default {
  delete (endpoint, success, error) {
    request.bind(this)('delete', endpoint, success, error)
  },
  get (endpoint, success, error) {
    request.bind(this)('get', endpoint, success, error)
  },
  post (endpoint, success, error, payload) {
    request.bind(this)('post', endpoint, success, error, payload)
  },
  put (endpoint, success, error, payload) {
    request.bind(this)('put', endpoint, success, error, payload)
  }
}
