import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types.js'

export function * fetchCollectionAsync(){
    yield console.log("HI")
}

export function* fetchCollectionStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
        )
}