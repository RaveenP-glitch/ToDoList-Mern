# ToDoList-Mern
 
This is a simple To-Do app built using ReactJS for the frontend and NodeJS for the backend and MongoDB as the database.


![Image](https://user-images.githubusercontent.com/55187981/156755055-1041d8b2-60b0-4190-9be5-c6c997f8eaa9.png)

Screenshot of the frontend.


CRUD Operations from the backend.

//CREATE<br/>
This can be done using a PUT request using the URL -> http://localhost:8070/tasks/add <br/>
eg: await axios.post("http://localhost:8070/tasks/add", addTask);<br/>

//READ<br/>
This can be done using a GET request using the URL -> http://localhost:8070/tasks/
The response will look like this.

[<br/>
    {
        "_id": "6221a44ecaf35381305eea7a",
        "title": "Task 1",
        "description": "Run test code.",
        "createdAt": "2022-03-04T05:31:58.115Z",
        "updatedAt": "2022-03-04T05:31:58.115Z",
        "__v": 0
    },<br/>
    {
        "_id": "6221eb265f51b67d5541355a",
        "title": "Task 2",
        "description": "sdfsdf",
        "createdAt": "2022-03-04T10:34:14.206Z",
        "updatedAt": "2022-03-04T10:34:14.206Z",
        "__v": 0
    },<br/>
    {
        "_id": "6221ed765f51b67d5541356e",
        "title": "Task 3",
        "description": "saeewc",
        "createdAt": "2022-03-04T10:44:06.879Z",
        "updatedAt": "2022-03-04T10:44:06.879Z",
        "__v": 0
    },<br/>
    {
        "_id": "6221ed805f51b67d55413571",
        "title": "Task 4",
        "description": "New task 4",
        "createdAt": "2022-03-04T10:44:16.175Z",
        "updatedAt": "2022-03-04T10:44:16.175Z",
        "__v": 0
    },<br/>

]


//UPDATE<br/>
This can be done using a GET request using the URL -> http://localhost:8070/tasks/update/:id<br/>
 eg: await axios.post(`http://localhost:8070/tasks/update/${editTodoData._id}`, editTodoData)<br/>


//DELETE<br/>
This can be done using a GET request using the URL -> http://localhost:8070/tasks/delete/:id<br/>
eg: axios.delete(`http://localhost:8070/tasks/delete/${props.id}`)<br/>


const PORT = process.env.PORT || 8070;

//DATABASE<br/>
MongoDB 5.0<br/>
MongoDB Atlas is accessed through the application.<br/>
Cloud based DB <br/>
