import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto text-center px-4 py-10 sm:py-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Welcome to Todo App
      </h2>
      <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto">
        This is a simple React application built to demonstrate SPA fundamentals,
        hooks, and routing. Manage your tasks efficiently with our clean interface.
      </p>
      <Button onClick={() => navigate("/list")} className="w-full sm:w-auto px-8 py-3 text-lg">
        Go to Task List
      </Button>
    </div>
  );
}

export default Home;

