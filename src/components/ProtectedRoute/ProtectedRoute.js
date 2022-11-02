import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}) {
    const {user, loading, isAuthenticated} = useAuth();

    if (loading) return <h1>Cargando</h1>

    if (!isAuthenticated) return <Navigate to='/login' />

    return <>{children}</>
}
