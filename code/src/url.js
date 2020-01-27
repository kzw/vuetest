const path = require('path')

const CASHIER = 'cashier'
const TYCOON = 'tycoon'
const PURCHASE = 'purchase'
const PATRON = 'patron'

const _base = {
  init (root) { this.root = root },
  base (uri) { return this.root + path.join('/', uri) },

  get cashierProgram () { return this.base('cashier/program') },
  get cashierProgramEnabled () { return path.join(this.cashierProgram, 'enabled') },
  get logIn () { return this.base('logIn') },
  get passwordReset () { return this.base('passwordReset') },
  get profileCode () { return this.base('profile/code') },
  get signUpComplete () { return this.base('signUpComplete') },
  get signUpEmail () { return this.base('signUpEmail') },
  get tycoonCreateBusiness () { return this.base('tycoon/createBusiness') },

  programDashboard (pk) { return this.base(path.join('programDashboard', pk)) },
  signUpEmailComplete (pk) { return this.base(path.join('signUpEmailComplete', pk)) },
  tycoonCreateProgram (business) { return this.base(path.join(TYCOON, business, 'createProgram')) },
  tycoonCreateShop (business) { return this.base(path.join(TYCOON, business, 'createShop')) },

  aBusiness (pk) { return path.join(this.business, pk) },
  aLocation (pk) { return path.join(this.location, pk) },
  aProgram (pk) { return path.join(this.program, pk) },
  aShop (pk) { return path.join(this.shop, pk) },
  aShopCashier (pk) { return path.join(this.shop, pk, CASHIER) },
  patronPurchase (pk, token) { return this.base(path.join(PATRON, pk, PURCHASE, token)) },
  patronRedeem (pk) { return this.base(path.join(PATRON, pk, 'redeem')) },
  unredeemedPurchases (program, patron) {
    return this.base(path.join('program', program, PATRON, patron, PURCHASE))
  },
  shopInviteCashier (pk, token) {
    return this.base(path.join('shop', pk, 'invite', token, CASHIER))
  }
}

const SEPARATOR = /\s+/
export const COMMON_ROUTES = 'shop business program profile contact signUp'.split(SEPARATOR)
export const ROUTES = COMMON_ROUTES.concat('me mePurchases location states registerCode'.split(SEPARATOR))
export const JS_ROUTES = COMMON_ROUTES.concat('loggedIn signUpNext signUpCode'.split(SEPARATOR))

const _handler = {
  init (routes) { this.routes = routes },
  get (target, prop) {
    if (prop in target) return target[prop]
    if (this.routes.includes(prop)) return target.base(prop)
    throw new TypeError(prop + ' is not a valid route!')
  }
}

const jsHandler = Object.create(_handler)
jsHandler.init(JS_ROUTES)
const handler = Object.create(_handler)
handler.init(ROUTES)

export const url = new Proxy(Object.create(_base), handler)
const api = {
  get logOut () { return '/api/logOut' },
  businessDashboard (pk) { return path.join('/api/businessDashboard', pk) },
  aShopManagerAddCashier (pk) { return path.join('/api/shopManager', pk, 'addCashier') }
}
for (const k in api) url[k] = api[k]

url.init('/api')

export const js = new Proxy(_base, jsHandler)
js.init('')
