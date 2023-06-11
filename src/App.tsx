import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EditorPage from "./pages/EditorPage";
import useUserStore from "./store/userstore";
import HomePage from "./pages/HomePage";
import PreviewPage from "./pages/PreviewPage";
import { useEffect } from "react";
import usePostStore from "./store/poststore";

function App() {
  const user = useUserStore((state) => state.user);
  const fetchPost = usePostStore((state) => state.fetchPost);
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user?.email == null ? <LandingPage /> : <HomePage />}
          />
          <Route path="/editor" element={<EditorPage />} />
          <Route
            path="/preview/:id"
            element={user?.email == null ? <LandingPage /> : <PreviewPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
