import request from './request'
import URL from './url'

export const getNewArrival = () => {
    return request({ url: URL.newArrival })
}

export const getAllProducts = () => {
    return request({ url: URL.allProducts })
}

export const login = (username, password) => {
    return request({ url: URL.login, method: 'POST', data: { username, password } })
}

export const logout = () => {
    return request({ url: URL.logout })
}