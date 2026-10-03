import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GetSession } from "./session";

export default function RequireAuth() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const data = await GetSession();
        setSession(data);
      } catch (error) {
        console.error("Auth check failed", error);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
