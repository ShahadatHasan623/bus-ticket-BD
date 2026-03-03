import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
