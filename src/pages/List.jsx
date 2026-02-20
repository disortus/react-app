import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import Button from "../components/Button";

function List() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Todo List</h2>
        <Button onClick={fetchTasks} className="bg-zinc-700 hover:bg-zinc-600">
          Refresh Data
        </Button>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
        <div className="space-y-3">
          {tasks.map((task) => (
            <ListItem key={task.id} item={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
