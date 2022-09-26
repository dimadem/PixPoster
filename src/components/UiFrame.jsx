// Canvas, Shortcuts, Sliders
import { useContext } from "react";
import { AppDispatchContext, AppStateContext } from "./redux/AppStateProvider";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./Canvas";
import Shortcuts from "./UI/Shortcuts";
import Slider from "./UI/Slider";
import useKeyPress from "./hooks/useKeyPress.hook";

export default function UiFrame() {
  const dispatch = useContext(AppDispatchContext);
  const {
    data,
    scale,
    brightness,
    sizeRectangle,
    offsetX,
    offsetY,
    savePic,
    invertMode,
  } = useContext(AppStateContext);

  const onKeyPress = (event) => {
    console.log(`key pressed: ${event.key}`);
  };

  useKeyPress(
    [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "shiftKey",
      "altKey",
    ],
    onKeyPress
  );

  return (
    <div className="mx-auto sm:px-10 pb-10 dark:bg-black">
      <Shortcuts />
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
      <div className="flex justify-center grayscale">
        <ReactP5Wrapper // every change props all refreshing
          sketch={Canvas}
          dataLink={data}
          brightness={brightness}
          sizeRectangle={sizeRectangle}
          offX={offsetX}
          offY={offsetY}
          scale={scale}
          onSave={savePic}
          invertColor={invertMode}
        />
      </div>
    </div>
  );
}
