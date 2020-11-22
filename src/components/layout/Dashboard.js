import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      setError("");
      await logout();
      console.log('Logout Done')
    } catch {
      setError("Failed To Logout");
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      Hi There
      <Button variant="link" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
