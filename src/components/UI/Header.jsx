export default function Header(props) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between pt-5 pb-4 md:justify-start md:space-x-10">
        <div className="grid grid-cols-3 lg:w-0 lg:flex-1">
          {props.inputRequest}
          <div className="m-auto text-4xl text-slate-900">
            <label>PixPoster</label>
          </div>
          <div className="mainMenu">{props.mainMenu}</div>
        </div>
      </div>
    </div>
  );
}
