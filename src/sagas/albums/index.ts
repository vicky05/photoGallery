import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { getData, startLoading } from '../../reducer/slice/albums';


export function* getValues(): any {
  try {
    yield put(startLoading())
    const result = yield call(async () => {
      return await axios.get('https://jsonplaceholder.typicode.com/albums');
    });
    yield put(getData(result.data))
  } catch (e) {
    console.log('Error on getAlbums API call...!')
  }
}

export function* getAlbums() {
  yield takeEvery('FETCH_ALBUMS', getValues)
}