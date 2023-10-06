import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectName } from './selectors';
import { githubRepoFormActions as actions } from '.';
import { Repo } from 'types/Repo';
import { RepoErrorType } from './types';
import { ElectrumApiInterface } from 'services/electrum-api.interface';
import { ElectrumApiFactory, ElectrumApiMockFactory } from 'services/electrum-api-factory';
import { getMockApi } from './mock-api';

const remoteElectrumxUrl = process.env.REACT_APP_ELECTRUMX_PROXY_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  yield delay(200);
  // Select name from store
  const name: string = yield select(selectName);
  if (name.length === 0) {
    yield put(actions.repoError(RepoErrorType.REALMNAME_EMPTY));
    return;
  }
  let client: ElectrumApiInterface;
  const mockFactory = new ElectrumApiMockFactory(getMockApi());
  const factory = new ElectrumApiFactory(remoteElectrumxUrl + '', mockFactory.getMock());
  client = factory.create();
  try {
    // Call our request helper (see 'utils/request')
    const res = yield client.atomicalsGetRealmInfo(name);
    console.log('atomicalsGetRealmInfo', res);
    if (res && res.result && res.result.atomical_id) {
      const atomicalInfo = yield client.atomicalsGetLocation(res.result.atomical_id);
      console.log('atomicalsGetLocation', atomicalInfo);
      yield put(actions.realmInfoLoaded(atomicalInfo));
    } else {
      yield put(actions.repoError(RepoErrorType.REALM_NOT_FOUND));
    }
    yield client.close();
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.REALM_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubRepoFormSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadRepos.type, getRepos);
}
