import { fetch } from '../../utils/fetch';
import {
  ASYNC_FAILED,
  ASYNC_STARTED,
  ADD_TODO_SUCCESS,
  ADD_USERS_SUCCESS,
  RESET_STORE
} from './content-action-types.js';

export const fetchUsers = () => dispatch => {
    dispatch(addAsyncStarted());
  return fetch
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch(addUsersSuccess(res.data));
    })
    .catch(err => {
      dispatch(addAsyncFailure(err));
    });
};

export const fetchTodos = () => dispatch => {
  dispatch(addAsyncStarted());
  return fetch
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
      dispatch(addTodoSuccess(res.data));
    })
    .catch(err => {
      dispatch(addAsyncFailure(err));
    });
};

export const fetchError = () => dispatch => {
  dispatch(addAsyncStarted());
  setTimeout(()=> {
    try {
      throw new Error('oops')
    } catch(err) {
      dispatch(addAsyncFailure(err));
    }}
    , 2000)
};

const addAsyncFailure = error => ({
  type: ASYNC_FAILED,
  payload: error
});

const addAsyncStarted = () => ({
  type: ASYNC_STARTED
});

const addTodoSuccess = todos => ({
  type: ADD_TODO_SUCCESS,
  payload: todos
});

const addUsersSuccess = users => ({
  type: ADD_USERS_SUCCESS,
  payload: users
});

export const resetStore = () => ({
  type: RESET_STORE,
});

