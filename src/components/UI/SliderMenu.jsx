import Slider from "./Slider";
import { AppDispatchContext, AppStateContext } from "../redux/AppStateProvider";
import { useContext } from "react";

const SliderMenu = () => {
  const dispatch = useContext(AppDispatchContext);
  const { brightness, sizeRectangle } = useContext(AppStateContext);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-9 pt-1 pb-6">
        <Slider
          min={-250}
          max={-20}
          stepRange={10}
          value={sizeRectangle}
          onChange={(event) => {
            dispatch({
              type: "SET_sizeRectangle_VALUE",
              payload: +event.target.value,
            });
          }}
        />
        <div className="text-lg text-center dark:text-gray-50">
          rect size: <b>{-sizeRectangle}</b>
        </div>
        <Slider
          min={35}
          max={90}
          stepRange={1}
          value={brightness}
          onChange={(event) => {
            dispatch({
              type: "SET_brightness_VALUE",
              payload: +event.target.value,
            });
          }}
        />
        <div className="text-lg text-center dark:text-gray-50">
          brightness: <b>{brightness}</b>
        </div>
      </div>
    </>
  );
};

export { SliderMenu };
