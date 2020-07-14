import { put, takeLatest, all, call } from 'redux-saga/effects';

import { actionsCreators } from '../Redux';

import ListBooks from '../Services';

const {
  actionBooksRequest,
  actionBooksSuccess,
  actionBooksError,
  actionBooksSaga,
} = actionsCreators();

function* getAll(obj) {
  yield put(actionBooksRequest());

  try {
    const { payload } = obj;
    const { data } = yield call(ListBooks.allBooks, payload);
    yield put(actionBooksSuccess(data));
  } catch (err) {
    yield put(actionBooksError(err));
  }
}

export default function* booksSaga() {
  yield all([yield takeLatest(actionBooksSaga().type, getAll)]);
}
