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

export const changePassword = (username, password, newPassword) => {
    return request({ url: URL.changePassword, method: 'PATCH', data: { username, password, newPassword } })
}

export const getReceiver = () => {
    return request({ url: URL.getReceiver })
}

export const updateReceiver = (name, phone, address, detail) => {
    return request({ url: URL.updateReceiver, method: 'PATCH', data: { name, phone, address, detail } })
}

export const getRecommend = (gender) => {
    return request({ url: URL.recommend, data: { gender } })
}

export const addToCart = (data) => {
    return request({ url: URL.addToCart, method: 'PATCH', data })
}

export const removeFromCart = (data) => {
    return request({ url: URL.removeFromCart, method: 'PATCH', data })
}