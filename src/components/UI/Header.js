import InputRequest from "../../API/InputRequest";
import MainButton from "./MainButton";

export default function Header(params) {
  return (
    <>
      <div className="header">
        <InputRequest />
        <div className="logo">GifPoster</div>
        <div>
          <MainButton />
        </div>
      </div>
    </>
  );
}
