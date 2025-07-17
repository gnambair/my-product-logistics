import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashCard from "./components/DashCard";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shipments from "./components/Shipments";
import Fleet from "./components/Fleet";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  const [toggleDark, setToggleDark] = useState("light");

  const handleOnchange = () => {
    if (toggleDark === "light") {
      document.body.style.background = "black";
      setToggleDark("dark");
    } else {
      document.body.style.background = "white";
      setToggleDark("light");
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleDark={toggleDark} handleOnchange={handleOnchange} />
        <Sidebar toggleDark={toggleDark} />

        <Routes>
          <Route
            path="/"
            element={
              <DashCard
                toggleDark={toggleDark}
                title="Dashboard"
                description="Dashboard overview"
              />
            }
          />
          <Route
            path="/shipments"
            element={<Shipments toggleDark={toggleDark} title="Dashboard" />}
          />
          <Route
            path="/fleet"
            element={<Fleet toggleDark={toggleDark} title="Dashboard" />}
          />
          <Route
            path="/reports"
            element={<Reports toggleDark={toggleDark} title="Dashboard" />}
          />
          <Route
            path="/settings"
            element={<Settings toggleDark={toggleDark} title="Dashboard" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
