import request from '@/utils/request'

export function getKaptcha() {
  return request({
    url: '/auth/kaptcha',
    method: 'get'
  })
}

export function login(data) {
  return request({
    url: '/sso/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/auth/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/auth/logout',
    method: 'post',
    params: { token }
  })
}
