import MyLogo from "../resources/logo.svg";
import { useContext } from "react";
import { AppDispatchContext, AppStateContext } from "./redux/AppStateProvider";
import InputRequest from "./UI/InputRequest";
import MainMenu from "./UI/MainMenu";
import useInvertMode from "./hooks/useInvertMode.hook";

export default function Header() {
  const dispatch = useContext(AppDispatchContext);
  const { login } = useContext(AppStateContext);
  useInvertMode();
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 dark:bg-black">
      <div className="grid grid-cols-3 place-items-center">
        <div>{login ? <InputRequest /> : null}</div>
        <img
          onClick={() => {
            dispatch({ type: "INVERT_MODE", payload: true });
          }}
          className="bg-white hover:blur-sm invert dark:invert-0"
          src={MyLogo}
          width="47"
          height="47"
          alt="logo"
        />
        <div> {login ? <MainMenu /> : null}</div>
      </div>
    </div>
  );
}
