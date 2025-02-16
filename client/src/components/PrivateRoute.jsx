import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const token = localStorage.getItem("token"); // ✅ Get auth token from localStorage

    return token ? <Outlet /> : <Navigate to="/login" replace />;
}
