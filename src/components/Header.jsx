import MyLogo from "../resources/logo.svg";
import { useContext } from "react";
import { AppStateContext } from "./redux/AppStateProvider";
import InputRequest from "./UI/InputRequest";
import MainMenu from "./UI/MainMenu";

export default function Header() {
  const { login } = useContext(AppStateContext);
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 ">
      <div className="grid grid-cols-3 place-items-center">
        <div>{login ? <InputRequest /> : null}</div>
        <img
          className="bg-white invert"
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
