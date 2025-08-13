import AuthPage from "./pages/AuthPage";
import Homepage from "./pages/Homepage";
import AnimePage from "./pages/AnimePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/anime/:id" element={<AnimePage />}/>
            <Route path="/anime-news" element={<NewsPage />} />
          </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
