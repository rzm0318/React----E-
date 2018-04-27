export default {
  [RECEIVE_ADLIST] (state, {adlist}) {
    state.adlist = adlist
  },
  [RECEIVE_CLASSIFY] (state, {classify}) {
    state.classify = classify
  },
  [RECEIVE_BRAND] (state, {brand}) {
    state.brand = brand
  },
  [RECEIVE_CAROUSEL] (state, {carousel}) {
    state.carousel = carousel
  },
  [RECEIVE_ALL] (state, {all}) {
    state.all = all
  },
  [RECEIVE_CAPTCHA] (state, {captcha}) {
    state.captcha = captcha
  },
  [RECEIVE_LOGINPWD] (state, {loginpwd}) {
    state.loginpwd = loginpwd
  },
  [RECEIVE_LOGINSMS] (state, {loginsms}) {
    state.loginsms = loginsms
  },
  [RECEIVE_USERINFO] (state, {userinfo}) {
    state.userinfo = userinfo
  }
}
