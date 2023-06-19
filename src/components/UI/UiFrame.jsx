import { useContext } from "react";
import { AppStateContext } from "../redux/AppStateProvider";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "../canvas/Canvas";
import useKeyPress from "../hooks/useKeyPress.hook";
import { SliderMenu } from "./SliderMenu";

export default function UiFrame() {
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
      <SliderMenu />
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
