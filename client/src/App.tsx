import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";

function App() {
  return (
    <div className="h-full min-h-full">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
