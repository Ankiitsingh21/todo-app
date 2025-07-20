import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todo'

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/todos")
//       .then(async function(res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, []);

//   return (
//     <div>
//       <CreateTodo></CreateTodo>
//       <Todos todos={todos}></Todos>
//     </div>
//   )
// }

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Go to the gym",
//       description: "Go to the gym"
//     },
//     {
//       id: 2,
//       title: "Go to the class",
//       description: "Go to the class",
//     },
//     {
//       id: 3,
//       title: "Eat food",
//       description: "Eat food",
//     }
//   ]);

//   function AddaTodo() {
//     setTodos([...todos, {
//       id: todos.length + 1,
//       title: Math.random(),
//       description: Math.random(),
//     }]);
//   }

//   return (
//     <div>
//       <button onClick={AddaTodo}>Add a todo</button>
//       {todos.map(todo => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

export default App;