import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <h1 className="text-center">Welcome</h1>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
