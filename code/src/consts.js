export const regexes = {
  uuid: '([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})',
  northAmericaPhone: '(\\d{10})'
}

export const uuid = ':id' + regexes.uuid
export const uuid2 = ':id2' + regexes.uuid

export const HIDE_SPINNER = 'hideSpinner'
export const SHOW_SPINNER = 'showSpinner'
export const RESET_ERRORS = 'resetErrors'
export const SAVE_ERROR = 'saveError'
export const SAVE_PREFS = 'savePrefs'
export const SET_PREFS = 'setPrefs'
export const SET_SIGNED_IN = 'setSignedIn'
export const SET_USERNAME = 'setUsername'
