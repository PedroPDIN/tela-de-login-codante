import { Routes, Route, Navigate } from "react-router-dom";
import * as Pages from "./pages";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/welcome" element={<Pages.Welcome />} />
    </Routes>
  )
}

export default MainRoutes;