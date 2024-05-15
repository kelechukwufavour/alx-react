// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map } from 'immutable';

describe('Notification Selectors', () => {
  const initialState = {
    filter: 'DEFAULT',
    notifications: Map({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      4: { id: 4, isRead: true, type: 'default', value: 'Course completed' },
    }),
  };

  test('filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toBe('DEFAULT');
  });

  test('getNotifications returns a list of notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.size).toBe(4);
  });

  test('getUnreadNotifications returns a list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.size).toBe(3);
    unreadNotifications.forEach((notification) => {
      expect(notification.isRead).toBe(false);
    });
  });
});
