import InputRequest from "./InputRequest";
import MainButton from "./MainButton";

export default function Header() {
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
