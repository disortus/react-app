import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function CreateTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center justify-between mb-8 rounded-2xl border-2 border-zinc-800 px-5 py-3 w-full bg-zinc-900 focus-within:border-pink-400 transition-colors duration-300"
    >
      <input
        type="text"
        className="bg-transparent w-full border-none outline-none text-white placeholder:text-zinc-500"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="ml-3 p-2 rounded-xl bg-pink-400 text-zinc-400 hover:bg-pink-300 transition-colors duration-300"
      >
        <BsPlusLg size={20} className=""/>
      </button>
    </form>
  );
}

export default CreateTodo;
