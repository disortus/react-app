import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-6">Welcome to Todo App</h2>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        This is a simple React application built to demonstrate SPA fundamentals,
        hooks, and routing. Manage your tasks efficiently with our clean interface.
      </p>
      <Button onClick={() => navigate("/list")} className="px-8 py-3 text-lg">
        Go to Task List
      </Button>
    </div>
  );
}

export default Home;
