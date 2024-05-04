// reducers/uiReducer.js

import { Map } from 'immutable';

// Initial state
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({})
});

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);
    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);
    case 'LOGIN_SUCCESS':
      return state.set('isUserLoggedIn', true);
    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
};

export default uiReducer;