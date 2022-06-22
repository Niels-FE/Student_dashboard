import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Sidenav } from "./components/Sidenav.jsx";
import { Header } from "./components/Header.jsx";
import { Dashboard } from "./components/Dashboard.jsx";


function App() {
  return (
    <BrowserRouter>
      <section className="grid grid-cols-10 gap-4 max-w-6xl m-auto" >
        <header className="w-full col-start-1 col-end-10 xl:col-end-12 bg-white rounded-md p-2 row-start-2">
          <Header />
        </header>
        <aside className="w-full col-start-1 col-end-2 row-start-3">
          <Sidenav />
        </aside>
        <main className="w-full col-start-2 col-end-10 xl:col-end-12 bg-white rounded-md p-2 row-start-3">
          <Dashboard />
        </main>
      </section>
    </BrowserRouter>
  );
}

export default App;
