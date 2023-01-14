import { all, fork } from 'redux-saga/effects';
import { getAlbums } from './albums';
import {getUserData} from './users/index';
import {getPhotos} from './photos/index';
function* root() {
  yield all([
    fork(getUserData),
    fork(getAlbums),
    fork(getPhotos)
  ]);
}

export default root;
