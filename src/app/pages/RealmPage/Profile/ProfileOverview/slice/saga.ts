import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { profileOverviewActions as actions } from '.';
import { ProfileErrorType } from './types';
import { ElectrumApiInterface } from 'services/electrum-api.interface';
import { ElectrumApiFactory } from 'services/electrum-api-factory';
import { mockSearchRealmNameAndStatus } from './mocks';
import { selectName } from './selectors';

const remoteElectrumxUrl = process.env.REACT_APP_ELECTRUMX_PROXY_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  yield delay(200);
  // Select username from store
  const name: string = yield select(selectName);
  if (name.length === 0) {
    yield put(actions.repoError(ProfileErrorType.REALMNAME_EMPTY));
    return;
  }
  let client: ElectrumApiInterface;
  let apiMock: ElectrumApiInterface | undefined = undefined
  if (process.env.REACT_APP_ELECTRUMX_API_MOCK === 'true') {
    if (name === 'notfound') {
      apiMock = mockSearchRealmNameAndStatus(true)
    } else {
      apiMock = mockSearchRealmNameAndStatus()
    }
  }
  const factory = new ElectrumApiFactory(remoteElectrumxUrl + '', apiMock)
  client = factory.create();
  yield client.open();
  try {
    // Call our request helper (see 'utils/request')
    const res = yield client.atomicalsGetRealmInfo(name);
    console.log('result', res);
    if (res && res.result && res.result.atomical_id) {
      const atomicalInfo = yield client.atomicalsGetLocation(res.result.atomical_id);
      console.log('atomicalInfo', atomicalInfo);
      yield put(actions.realmInfoLoaded(atomicalInfo));
    } else {
      yield put(actions.repoError(ProfileErrorType.REALM_NOT_FOUND));
    }
    yield client.close();
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(ProfileErrorType.REALM_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.repoError(ProfileErrorType.GITHUB_RATE_LIMIT));
    } else {
      yield put(actions.repoError(ProfileErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* profileOverviewSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadRepos.type, getRepos);
}
