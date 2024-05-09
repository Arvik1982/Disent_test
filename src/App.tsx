import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, []);
  return (
    <>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      <AppRoutes setError={setError} />
    </>
  );
}

export default App;
