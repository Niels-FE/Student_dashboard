import React from 'react';
import { Sidenav } from "./components/Sidenav.jsx";
import { Header } from "./components/Header.jsx";
import { Dashboard } from "./components/Dashboard.jsx";

function App() {
  return (
    <section className="grid grid-cols-10 gap-2">
      <header>
        <Sidenav />
        <Header />
      </header>
      <main>
        <Dashboard />
      </main>
    </section>
  );
}

export default App;
