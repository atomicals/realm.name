import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectName } from './selectors';
import { nftMinterActions as actions } from '.';
import { Repo } from 'types/Repo';
import { ElectrumApiInterface } from 'services/electrum-api.interface';
import { ElectrumApiFactory } from 'services/electrum-api-factory';

const remoteElectrumxUrl = process.env.REACT_APP_ELECTRUMX_PROXY_BASE_URL; 

/**
 * Root saga manages watcher lifecycle
 */
export function* nftMinterSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(actions.loadRepos.type, getRepos);
}
