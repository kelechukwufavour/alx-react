// reducers/notificationReducer.js
const initialState = {
    filter: "DEFAULT",
    notifications: []
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notifications = action.data.map(notification => ({ ...notification, isRead: false }));
            return { ...state, notifications };
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map(notification =>
                    notification.id === action.index ? { ...notification, isRead: true } : notification
                )
            };
        case SET_TYPE_FILTER:
            return { ...state, filter: action.filter };
        default:
            return state;
    }
}