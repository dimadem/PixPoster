import MyLogo from "../../resources/logo.svg";
import InputRequest from "./InputRequest";
import MainMenu from "./MainMenu";

export default function Header(props) {
  return (
    <>
      <InputRequest />
      <img src={MyLogo} width="38" height="38" alt="logo" />
      <MainMenu />
    </>
  );
}
