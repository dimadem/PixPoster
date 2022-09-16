import { useState } from "react";
import Create from "./components/UI/Create";
import Welcome from "./components/UI/Welcome";

function App() {
  // login page (comp)
  const [login, setLogin] = useState(false);

  return login ? <Create /> : <Welcome onClick={() => setLogin(true)} />;
}
export default App;
