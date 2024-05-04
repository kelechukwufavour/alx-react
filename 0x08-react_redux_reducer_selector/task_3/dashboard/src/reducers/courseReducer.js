import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            // Merge the normalized data into the state
            return state.merge(normalizedData.entities.courses);
        case SELECT_COURSE:
            // Update the isSelected property of the selected course
            return state.setIn([action.index, 'isSelected'], true);
        case UNSELECT_COURSE:
            // Update the isSelected property of the unselected course
            return state.setIn([action.index, 'isSelected'], false);
        default:
            return state;
    }
}cd