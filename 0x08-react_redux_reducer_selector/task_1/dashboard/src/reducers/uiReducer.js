// reducers/uiReducer.js

// Initial state
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };
  
  // Reducer function
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DISPLAY_NOTIFICATION_DRAWER':
        return {
          ...state,
          isNotificationDrawerVisible: true
        };
      case 'HIDE_NOTIFICATION_DRAWER':
        return {
          ...state,
          isNotificationDrawerVisible: false
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isUserLoggedIn: true
        };
      case 'LOGIN_FAILURE':
      case 'LOGOUT':
        return {
          ...state,
          isUserLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default uiReducer;  