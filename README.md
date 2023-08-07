
#  Documentation:
1. The **App** component represents the main TODO app.
2. The **useLocalStorage ** hook is used to handle storing and retrieving the TODOs from local storage.
3. The **handleInputChange** function handles the change in the input field.
4. The **handleFormSubmit** function handles the submission of the new TODO.
5. The **handleTodoClick** function handles the toggling of the completion status of a TODO when clicked.
6. The **handleTodoDelete** function handles the deletion of a specific TODO.
7. The **handleResetClick** function handles the reset of all the TODOs.
8. The **handleRemoveClick** function handles the removal of all completed tasks.
9. The **activeTodos** variable stores the active TODOs by filtering out the completed ones.
10. The **completedTodos** variable stores the completed TODOs by filtering them out.
11. The rendered JSX displays the TODO app with the input form, active and completed TODO lists, and corresponding buttons.

# Assumptions:

1. The user can add new tasks by typing them into the input field and pressing Enter or clicking the "Add" button.
2. The user can mark a task as completed by clicking on it, and it will be visually indicated with a line-through style.
3. The user can reset the app to the initial state by clicking the "Reset" button.
4. The user can remove all completed tasks by clicking the "Remove Completed Tasks" button when there are completed tasks present.

# Unhandled Edge Cases:

1. The code assumes that the input field is cleared after submitting a new task.
2. The code assumes that the tasks are unique based on their IDs to avoid any conflicts.
3. The code assumes that there are no duplicate tasks added to the list. If there are duplicates, the behavior may not be as expected.
4. The code assumes that the local storage is available and accessible. If it is not, the app may not function correctly.



# Getting Started with Create React App

This project was bootstrapped with [https://vijaysadhuram.github.io/TODO-react/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


