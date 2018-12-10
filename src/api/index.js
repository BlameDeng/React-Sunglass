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

export const check = () => {
    return request({ url: URL.check })
}

export const changeProfile = (nickyname, gender) => {
    return request({ url: URL.changeProfile, method: 'PATCH', data: { nickyname, gender } })
}