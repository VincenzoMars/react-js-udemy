import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import listingReducer from './listing'

const rootReducers = combineReducers({
    listing: listingReducer
})

const store = configureStore({ reducer: rootReducers })

const listingSubscriber = () => {
    const latestState = store.getState()
    console.log('cambio di stato: --->', latestState);
}

store.subscribe(listingSubscriber)

export default store