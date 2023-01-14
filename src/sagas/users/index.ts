import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { getData, startLoading } from '../../reducer/slice/users';


export function* getValues(): any {
  try {
    yield put(startLoading())
    const result = yield call(async () => {
      return axios.get('https://jsonplaceholder.typicode.com/users');
    });
    yield put(getData(result.data))
  } catch (e) {
    console.log('Error on getUser API call...!')
  }
}

export function* getUserData() {
  yield takeEvery('FETCH_TABLE_DATA', getValues)
}