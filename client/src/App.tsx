import { useEffect, useState } from "react";
import api from "./api/api";

type HealthResponse = {
  success: boolean;
  message: string;
};

function App() {
  const [message, setMessage] = useState("Connexion au serveur...");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await api.get<HealthResponse>("/health");
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
        setError("Impossible de joindre le serveur CARE.");
      }
    };

    checkServer();
  }, []);

  return (
    <main>
      <h1>CARE</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </main>
  );
}

export default App;