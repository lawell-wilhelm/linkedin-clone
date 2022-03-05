import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app-body">
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Wdigets */}
    </div>
  );
};
export default App;
