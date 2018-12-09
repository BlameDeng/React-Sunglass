import request from './request'
import URL from './url'

export const getNewArrival = () => {
    return request({ url: URL.newArrival })
}