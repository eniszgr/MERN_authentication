import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/auth" element={<Layout><AuthPage /></Layout>} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
