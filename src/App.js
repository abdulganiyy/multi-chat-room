import "./App.css";
import { useAuth } from "hooks/useAuth";
import AuthenticatedApp from "components/AuthenticatedApp";
import UnAuthenticatedApp from "components/UnAuthenticatedApp";

function App() {
  const { user } = useAuth();
  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
