// reducers/courseReducer.js
const initialState = [];

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({ ...course, isSelected: false }));
        case SELECT_COURSE:
            return state.map(course => 
                course.id === action.index ? { ...course, isSelected: true } : course
            );
        case UNSELECT_COURSE:
            return state.map(course => 
                course.id === action.index ? { ...course, isSelected: false } : course
            );
        default:
            return state;
    }
}
