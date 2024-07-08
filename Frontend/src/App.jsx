import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import SharedPage from "./pages/SharedPage/SharedPage";
function App() {
  const ProtectingRoute = () => {
    const isAuthorized = localStorage.getItem("tokenPro");
    return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectingRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sharedLink/:id" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
