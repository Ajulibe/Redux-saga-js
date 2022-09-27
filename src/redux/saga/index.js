import { call, takeEvery, put } from "redux-saga/effects";
import {
  getUser,
  getUserError,
  getUserSuccess,
  createUser,
  createFn,
  editUser,
  deleteUser,
  deleteFn,
  editFn
} from "../action/index";
import {
  getUsers as UsersAPI,
  createUsers as CreateUsersAPI,
  editUsers as EditUsersAPI,
  deleteUsers as DeleteUserAPI
} from "api";

function* getAllUsers() {
  try {
    const res = yield call(UsersAPI, {});
    yield put(getUserSuccess(res));
  } catch (err) {
    yield put(getUserError());
  }
}
function* createNewUser({ payload }) {
  try {
    yield call(CreateUsersAPI, { ...payload });
    yield put(createUser(payload));
  } catch (err) {
    yield put(getUserError());
  }
}

function* editAUser({ payload }) {
  try {
    const response = yield call(EditUsersAPI, { payload });
    if (response?.response?.status === 404) return;
    yield put(editUser(payload));
  } catch (err) {
    yield put(getUserError());
  }
}
function* deleteAUser({ payload }) {
  try {
    const response = yield call(DeleteUserAPI, { payload });
    if (response?.response?.status === 404) return;
    yield put(deleteUser(payload));
  } catch (err) {
    yield put(getUserError());
  }
}

//--> general saga watcher for users
function* userSagas() {
  yield takeEvery(getUser.type, getAllUsers);
  yield takeEvery(createFn.type, createNewUser);
  yield takeEvery(editFn.type, editAUser);
  yield takeEvery(deleteFn.type, deleteAUser);
}

export default userSagas;
