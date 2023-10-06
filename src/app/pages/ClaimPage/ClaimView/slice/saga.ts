import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { profileOverviewActions as actions } from '.';
import { ClaimViewErrorType } from './types';
import { ElectrumApiInterface } from 'services/electrum-api.interface';
import { ElectrumApiFactory } from 'services/electrum-api-factory';
import { mockSearchRealmNameAndStatus } from './mocks';
import { selectPrimaryAddress } from 'app/slice/selectors';
import { detectAddressTypeToScripthash } from 'app/helpers/address-helpers';

const remoteElectrumxUrl = process.env.REACT_APP_ELECTRUMX_PROXY_BASE_URL;
/**
 * Github repos request/response handler
 */
export function* getRealms() {
  yield delay(200);
  // Select username from store
  const primaryAddress: string = yield select(selectPrimaryAddress);
  const { scripthash } = detectAddressTypeToScripthash(primaryAddress);
  //  let res = await this.electrumApi.atomicalsByScripthash(scripthash, true);

  let client;
  const factory = new ElectrumApiFactory(remoteElectrumxUrl + '');
  client = factory.create();
  yield client.open();
  try {
    const atomicalInfo = yield client.atomicalsByScripthash(scripthash);
    yield put(actions.realmInfoLoaded(atomicalInfo));
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(ClaimViewErrorType.GENERAL_ERROR));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.repoError(ClaimViewErrorType.GENERAL_ERROR));
    } else {
      yield put(actions.repoError(ClaimViewErrorType.GENERAL_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* claimViewSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadRealms.type, getRealms);
}
