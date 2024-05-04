import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    test('default state returns the correct initial state', () => {
        const newState = notificationReducer(undefined, {});
        expect(newState.get('filter')).toBe("DEFAULT");
        expect(newState.get('notifications').size).toBe(0);
    });

    test('FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
        const notificationsData = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", value: "New data available" }
        ];
        const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notificationsData };
        const newState = notificationReducer(undefined, action);
        expect(newState.get('notifications').size).toBe(3);
        expect(newState.getIn(['notifications', 0, 'isRead'])).toBe(false);
    });

    test('MARK_AS_READ updates the correct notification', () => {
        const initialState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" }
            ]
        };
        const action = { type: MARK_AS_READ, index: 2 };
        const newState = notificationReducer(initialState, action);
        expect(newState.getIn(['notifications', 1, 'isRead'])).toBe(true);
    });

    test('SET_TYPE_FILTER updates the filter correctly', () => {
        const initialState = {
            filter: "DEFAULT",
            notifications: []
        };
        const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
        const newState = notificationReducer(initialState, action);
        expect(newState.get('filter')).toBe("URGENT");
    });
});