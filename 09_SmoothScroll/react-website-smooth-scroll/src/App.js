import "./App.css";
// import Navbar from "./components/Navbar/index";
// import Sidebar from "./components/Sidebar/index";
import Home from "./pages/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar />
      <Navbar /> */}
      <Home />
    </BrowserRouter>
  );
}

export default App;
