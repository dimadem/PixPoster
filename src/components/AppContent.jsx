import { useContext } from "react";
import { AppDispatchContext, AppStateContext } from "./redux/AppStateProvider";
import CreateScreen from "./screens/Create.screen";
import WelcomeScreen from "./screens/Welcome.screen";

export default function AppContent() {
  const dispatch = useContext(AppDispatchContext);
  const { login } = useContext(AppStateContext);

  return login ? (
    <CreateScreen />
  ) : (
    <WelcomeScreen
      onClick={() =>
        dispatch({
          type: "TOGGLE_LOGIN",
          payload: {
            key: "login",
            value: !login,
          },
        })
      }
    />
  );
}
