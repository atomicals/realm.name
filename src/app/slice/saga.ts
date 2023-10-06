import { takeLatest, put } from 'redux-saga/effects';
import { appGlobalActions as actions } from '.';
import { deleteSessionFromCookie, getSessionFromCookie } from 'utils/session-validator';

export function* initSessionFromCookie() {
  let session = getSessionFromCookie();
  if (!session) {
    yield put(actions.setUnauthenticated());
    return;
  }
  yield put(actions.setEncryptedSession(session));
}
 
export function* clearSession() {
  deleteSessionFromCookie();
}

export function* sagaInitSessionFromCookie() {
  yield takeLatest(actions.initSessionFromCookie.type, initSessionFromCookie);
}

export function* sagaClearSession() {
  yield takeLatest(actions.clearSession.type, clearSession);
}
 
/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadProfile.type, sagaInitSessionFromCookie);
  yield takeLatest(actions.clearSession.type, sagaClearSession);
}
