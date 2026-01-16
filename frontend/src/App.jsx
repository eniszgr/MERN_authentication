import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/auth" element={<Layout><AuthPage /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
