import { all, call, spawn } from "redux-saga/effects";
import userSagas from "redux/saga";

function* rootSaga() {
  const sagas = [userSagas];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            return;
          }
        }
      })
    )
  );
}

export default rootSaga;
