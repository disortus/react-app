import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

