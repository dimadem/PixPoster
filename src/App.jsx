import AppContent from "./components/AppContent";
import AppStateProvider from "./components/redux/AppStateProvider";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <AppStateProvider>
        <AppContent />
      </AppStateProvider>
    </StrictMode>
  );
}
export default App;
