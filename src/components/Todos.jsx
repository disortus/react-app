import { useState } from "react";
import TodoItem from "./items/TodoItem";

const data = [
  { id: 1, title: "Buy groceries", isComplite: false },
  { id: 2, title: "Finish React project setup", isComplite: true },
  { id: 3, title: "Read about useEffect", isComplite: false },
  { id: 4, title: "Refactor components structure", isComplite: true },
  { id: 5, title: "Write API integration logic", isComplite: false },
  { id: 6, title: "Fix navbar styling", isComplite: true },
  { id: 7, title: "Add dark mode toggle", isComplite: false },
  { id: 8, title: "Implement form validation", isComplite: false },
  { id: 9, title: "Optimize Vite build config", isComplite: true },
  { id: 10, title: "Deploy project to Vercel", isComplite: false },
];

function Todos(){
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t.id === id);
        current.isComplite = !current.isComplite;
        setTodos(copy);
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id != id));
    }

    return(
        <div className="bg-zinc-900 h-screen text-white w-4/5 mx-auto">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}
         changeTodo={changeTodo}
         removeTodo={removeTodo}    
         />)}
        </div>
    )
    
}

export default Todos;