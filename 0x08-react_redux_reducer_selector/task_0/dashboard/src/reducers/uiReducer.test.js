// reducers/uiReducer.test.js

import uiReducer from './uiReducer';

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(initialState, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('correctly changes isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' })).toEqual(expectedState);
  });
});