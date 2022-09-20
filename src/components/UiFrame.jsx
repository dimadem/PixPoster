// Canvas, Shortcuts, Sliders
import { useContext } from "react";
import { AppDispatchContext, AppStateContext } from "./redux/AppStateProvider";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./Canvas";
import Shortcuts from "./Shortcuts";
import Slider from "./UI/Slider";

export default function UiFrame() {
  const dispatch = useContext(AppDispatchContext);
  const { data, scale, brightness, sizeRectangle, offsetX, offsetY, savePic } =
    useContext(AppStateContext);
  return (
    <div className="absolute top-1/2 right-1">
      <Shortcuts />
      <em>Size Rect: {-sizeRectangle}</em>
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
      <em>Brightness: {brightness}</em>
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
      <ReactP5Wrapper // every change props all refreshing
        sketch={Canvas}
        dataLink={data}
        brightness={brightness}
        sizeRectangle={sizeRectangle}
        offX={offsetX}
        offY={offsetY}
        scale={scale}
        onSave={savePic} //FIX IT
      />
    </div>
  );
}
