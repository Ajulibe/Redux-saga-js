import {
  getUserSuccess,
  getUserError,
  fetchingUsers,
  createUser,
  editUser,
  deleteUser,
  sortUsers
} from "../action";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  status: "loading",
  initialLength: 0
};

export const reducer = createReducer(initialState, {
  [getUserSuccess.type]: (state, action) => {
    state.user = action.payload;
    state.status = "success";
    state.initialLength = action.payload.length;
  },
  [getUserError.type]: (state, action) => {
    state.user = action.payload;
    state.status = "failed";
  },
  [fetchingUsers.type]: (state) => {
    state.status = "loading";
  },
  //Add a New User
  [createUser.type]: (state, { payload }) => {
    state.user.push(payload);
    state.initialLength = payload.id;
  },
  //Edit a User
  [editUser.type]: (state, { payload }) => {
    state.user[payload.index] = payload.data;
  },
  //delete a User
  [deleteUser.type]: (state, { payload }) => {
    state.user.splice(payload?.dataIndex, 1);
  },
  //sort by Username
  [sortUsers.type]: (state, { payload }) => {
    state.user = payload;
  }
});
