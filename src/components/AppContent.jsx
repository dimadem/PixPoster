import { useContext } from "react";
import { AppDispatchContext, AppStateContext } from "./redux/AppStateProvider";
import Create from "./Create";
import Welcome from "./Welcome";

export default function AppContent(props) {
  const dispatch = useContext(AppDispatchContext);
  const { login } = useContext(AppStateContext);

  return login ? (
    <Create />
  ) : (
    <Welcome
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
