import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { getData, startLoading } from '../../reducer/slice/photos';


export function* getValues(): any {
  try {
    yield put(startLoading())
    const result = yield call(async () => {
      return await axios.get('https://jsonplaceholder.typicode.com/photos');
    });
    yield put(getData(result.data))
  } catch (e) {
    console.log('Error on getPhoto API call...!')
  }
}

export function* getPhotos() {
  yield takeEvery('FETCH_PHOTOS', getValues)
}