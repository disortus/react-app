import { useState, useEffect } from "react";
import { todoData } from "../assets/data";
import ListItem from "../components/ListItem";
import CreateTodo from "../components/CreateTodo";

function List() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = () => {
    setLoading(true);
    setError(null);
    
    setTimeout(() => {
      try {
        if (Math.random() > 0.98) {
          throw new Error("Temporary network glitch");
        }
        setTasks(todoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-pink-400">My Tasks</h2>
      </div>

      <CreateTodo onAdd={addTask} />

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-400 font-medium">Loading tasks...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-center mb-6">
          <p className="font-semibold">Error: {error}</p>
          <button onClick={fetchTasks} className="mt-2 text-sm underline hover:text-red-400 transition-colors">
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <ListItem 
                key={task.id} 
                item={task} 
                onToggle={toggleTask} 
                onDelete={removeTask}
              />
            ))
          ) : (
            <div className="text-center py-10 text-zinc-500">
              <p>No tasks yet. Add one above!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default List;

