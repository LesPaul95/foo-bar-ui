import {
  ASYNC_FAILED,
  ASYNC_STARTED,
  ADD_TODO_SUCCESS,
  ADD_USERS_SUCCESS,
  RESET_STORE
} from "./content-action-types.js";

const initialState = {
  loading: false,
  users: [],
  todos: [],
  error: null
};

export function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ASYNC_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload
      };
    case ASYNC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload
      };
    case RESET_STORE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
