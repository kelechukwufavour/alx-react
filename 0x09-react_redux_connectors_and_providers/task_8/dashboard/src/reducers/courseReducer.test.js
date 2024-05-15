// reducers/courseReducer.test.js
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    test('default state returns an empty array', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    test('FETCH_COURSE_SUCCESS returns the data passed', () => {
        const coursesData = [
            { id: 1, name: "ES6", credit: 60 },
            { id: 2, name: "Webpack", credit: 20 },
            { id: 3, name: "React", credit: 40 }
        ];
        const action = { type: FETCH_COURSE_SUCCESS, data: coursesData };
        const newState = courseReducer([], action);
        expect(newState).toEqual([
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ]);
    });

    test('SELECT_COURSE returns the data with the right item updated', () => {
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const action = { type: SELECT_COURSE, index: 2 };
        const newState = courseReducer(initialState, action);
        expect(newState[1].isSelected).toBe(true);
    });

    test('UNSELECT_COURSE returns the data with the right item updated', () => {
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: true },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const action = { type: UNSELECT_COURSE, index: 2 };
        const newState = courseReducer(initialState, action);
        expect(newState[1].isSelected).toBe(false);
    });
});

