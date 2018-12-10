import { combineReducers } from 'redux'
import newArrival from './newArrival'
import allProducts from './allProducts'
import user from './user'
import cart from './cart'
import receiver from './receiver'

export default combineReducers({
    newArrival,
    allProducts,
    user,
    cart,
    receiver
})