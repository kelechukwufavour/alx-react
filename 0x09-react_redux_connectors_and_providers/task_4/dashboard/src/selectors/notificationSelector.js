// src/selectors/notificationSelector.js

export const filterTypeSelected = (state) => state.filter;

export const getNotifications = (state) => state.notifications;

export const getUnreadNotifications = (state) =>
  state.notifications.filter((notification) => !notification.isRead);
