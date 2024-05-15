his project encompasses a series of tasks focused on implementing Redux functionality into a React application. Below, you'll find details about each task along with the necessary steps to accomplish them.

General Requirements:
Allowed editors: vi, vim, emacs, Visual Studio Code
All files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
Push all of your files, including package.json and .babelrc
All of your functions must be exported
Task 0: Write mapStateToProps
In the App.js file:

Create a function named mapStateToProps to connect the uiReducer to the isLoggedIn property
Import connect from Redux and connect the mapStateToProps to the component
Task 1: Create a small store
In the index.js file:

Create a store using createStore from Redux containing the uiReducer state
Implement a provider passing the store to the main App
Task 2: Test MapStateToProps
In the App.test.js file:

Create a suite to test the mapStateToProps function
Verify that the function returns the correct object when passing the state
Task 3: Update mapStateToProps
In the App.js file:

Update the mapStateToProps function to pass the value for displayDrawer, connected to the isNotificationDrawerVisible Reducer attribute
Update the render function to use the value displayDrawer from the props instead of the state
Task 4: Connect your actions creators
In the App.js file:

Connect the component to the actions creators displayNotificationDrawer and hideNotificationDrawer
Modify the render function to use the functions passed within the props instead of the class functions
Task 5: Refactor your code
In the App.js file:

Delete the old functions handleDisplayDrawer and handleHideDrawer
Remove any state property related to the display of the drawer
Remove any binding in the constructor
Define propTypes and defaultProps for the components receiving props
Task 6: Update your tests
In the App.test.js file:

Refactor the tests to support the new attribute
Remove tests for the functions handleDisplayDrawer and handleHideDrawer
Task 7: Async actions & Thunk middleware
In the index.js file:

Install redux-thunk within your project
Apply the middleware to your store
Task 8: Connect LoginRequest to the App
Modify the App.js file:

Connect the action creator loginRequest and map it to the login prop
Modify the component to use the new login function from the props instead of the class function
Task 9: Connect user state to the Footer
Modify the Footer.js file:

Create a mapStateToProps function
Map the user prop to the user within the Redux state
Connect the Footer component to the function you created
Modify the render function to use the user prop
Task 10: Connect Logout action creator to the Header
Modify the Header.js file:

Create a mapStateToProps function
Map the user prop to the user within the Redux state
Connect the Header component to the function you created
Connect the Header component to the logout action creator
Modify the render function to use the user prop
Task 11: Modify the uiReducer
In the uiReducer.js file:

Update the reducer to set the user within the state when the LOGIN action is passed
Update the reducer to set the user to null when the LOGOUT action is passed
Task 12: Modify the test suites
Modify the test suites of the different components you modified
Update tests to support the new attributes and default state
Create new tests to verify the actions and reducers behavior
Task 13: Understand how to use the Redux Chrome extension
Install the Redux DevTools extension on your Chrome browser
Modify the index.js file to support the extension
Use the application and note the different actions being registered when logging in / logging out
Task 14: Combine store: Root reducer
Create a new file rootReducer.js:

Export a rootReducer containing every reducer
Map courses to courseReducer, notifications to notificationReducer, and ui to uiReducer
Task 15: Combine store: modify the application
In the index.js file:

Create the store using the rootReducer instead of only the uiReducer
Task 16: Combine store: write the tests
Modify the test suites:

Modify mapStateToProps to correctly work with the new format of the reducer
Create tests to verify the root reducer’s initial state
Task 17: Connect notifications: New Action Creator
Add new action creators to notificationActionCreators.js:

setLoadingState, setNotifications, and fetchNotifications
Task 18: Connect notifications: Improve reducer
In notificationReducer.js:

Add a loading attribute to the initial state
Modify the notifications object to have the correct initial state when merging data
Create cases for SET_LOADING_STATE and FETCH_NOTIFICATIONS_SUCCESS
Task 19: Connect notifications to the reducer
In Notifications.js:

Map the prop listNotifications to the messages within the notifications state
Map the action fetchNotifications to the component
Call fetchNotifications in componentDidMount
Task 20: Connect notifications: clean up
Delete NotificationItemShape.js
Remove the notification list and delete markNotificationAsRead within App.js
Task 21: Connect notifications: update the test suites
Modify the test suites to pass the tests:

Update tests to support the new attributes and default state
Add tests to verify the correct behavior of the actions and reducers
Task 22: Selectors
In notificationSelector.js, create a selector named getUnreadNotificationsByType:

Combine the state of the filter and the list of notifications
Return unread notifications based on the filter type
Task 23: Connect courses: create a course selector
In courseSelector.js, create a selector that:

Gets all the course entities from within the reducer
Returns a List using valueSeq from Immutable
Task 24: Connect courses: create a fetch courses function
In courseActionCreators.js, create a function fetchCourses that:

Queries the API in courses.json
Dispatches the action setCourses when the API returns data
Task 25: Connect the courses component
In CourseList.js, connect the component to:

The action creators fetchCourses, selectCourse, and unSelectCourse
Connect the data to the list of courses using getListCourses selector
Task 26: Memoized selectors: Redux Reselect
In notificationSelector.js, create a new selector named getUnreadNotificationsByType using Redux Reselect:

Memoize the selector to improve performance
Task 27: Memoized selectors: update the UI
In Notifications.js, update the component to use the new selector:

Map the component to the Action setNotificationFilter
Add buttons to set notification filters
Task 28: Memoized selectors: update the test suite
In Notifications.test.js:

Add tests to verify the correct behavior of the buttons and the selector
Task 29: Container/Component
Create a new file NotificationsContainer.js to handle state connection and data fetching
Modify Notifications.js to become a functional component
Write tests to ensure the fetching behavior in NotificationsContainer.js