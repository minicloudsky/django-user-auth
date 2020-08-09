import * as API from '../'

export const register = data => {
  return API.POST('user/register/', data)
}
export const login = data => {
  return API.POST('user/login/', data)
}
export default {
  login,
  register
}
