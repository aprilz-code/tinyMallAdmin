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

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function userDetail(id) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: { id }
  })
}

export function updateUser(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function listAddress(query) {
  return request({
    url: '/address/list',
    method: 'get',
    params: query
  })
}

export function listCollect(query) {
  return request({
    url: '/collect/list',
    method: 'get',
    params: query
  })
}

export function listFeedback(query) {
  return request({
    url: '/feedback/list',
    method: 'get',
    params: query
  })
}

export function listFootprint(query) {
  return request({
    url: '/footprint/list',
    method: 'get',
    params: query
  })
}

export function listHistory(query) {
  return request({
    url: '/history/list',
    method: 'get',
    params: query
  })
}

