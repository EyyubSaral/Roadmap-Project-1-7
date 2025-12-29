https://roadmap.sh/projects/task-tracker-js
This project is a simple task tracker (todo list) application that allows users to add tasks, mark them as completed, revert them back to pending, and delete them. 
Tasks are stored in an array as objects containing id, val, and completed properties.
New tasks are added via an input field. Completed tasks are displayed with a strikethrough and are automatically moved to the end of the list. 
Clicking on a task toggles its completed state, while a delete button completely removes the task. Due to event bubbling, e.stopPropagation() is used during the delete operation. 
Adding a task with an empty input is not allowed, and the list is re-rendered after every operation.
