import { createAction } from "@reduxjs/toolkit";
export const getUser = createAction("GET_USERS");
export const getUserError = createAction("GET_USERS_ERROR");
export const fetchingUsers = createAction("FETCHING_USERS");
export const getUserSuccess = createAction("GET_USER_SUCCESS");

/*=============================================
=            Create, update and delete a user            =
=============================================*/
export const createFn = createAction("CALL_CREATE_USER");
export const createUser = createAction("CREATE_USER");

export const editFn = createAction("CALL_EDIT_USER");
export const editUser = createAction("EDIT_USER");

export const deleteFn = createAction("CALL_DELETE_USER");
export const deleteUser = createAction("DELETE_USER");

/*=============================================
=            Sort By User Name            =
=============================================*/
export const sortUsers = createAction("SORT_USER");
