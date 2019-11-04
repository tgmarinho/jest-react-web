import { call, put } from 'redux-saga/effects';

import { getTechSuccess, getTechsFailure } from './actions';
import api from '~/services/api';

export function* getTechs() {
  try {
    const response = yield call(api.get, 'techs');

    yield put(getTechSuccess(response.data));
  } catch (error) {
    yield put(getTechsFailure);
  }
}
