import React from 'react';
import { Sidenav } from "./components/Sidenav.jsx";
import { Header } from "./components/Header.jsx";
import { Dashboard } from "./components/Dashboard.jsx";

function App() {
  return (
    <section className="grid grid-cols-10 gap-4 max-w-6xl m-auto" >
      <header className="w-full col-start-2 xl:col-start-1 col-end-10 xl:col-end-12 bg-white rounded-md p-2 row-start-2">
        <Header />
      </header>
      <main className="w-full col-start-2 xl:col-start-1 col-end-10 xl:col-end-12 bg-white rounded-md p-2 row-start-3">
        <Dashboard />
      </main>
    </section>
  );
}

export default App;
