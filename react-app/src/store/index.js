import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { listingSlice } from './listing'

const reducer = combineReducers({ listing: listingSlice.reducer })

const store = configureStore({ reducer })

const listingSubscriber = () => {
    const latestState = store.getState()
    console.log('cambio di stato: --->', latestState);
}

store.subscribe(listingSubscriber)

export default store