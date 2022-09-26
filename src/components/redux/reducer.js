export default function reducer(state, { type, payload }) {
  switch (type) {
    case "INVERT_MODE":
      return {
        ...state,
        invertMode: !state.invertMode,
      };
    case "LOAD_JSON":
      return {
        ...state,
        json: payload,
      };

    case "SET_DATA":
      return {
        ...state,
        data: payload,
      };

    case "SET_sizeRectangle_VALUE":
      return {
        ...state,
        sizeRectangle: payload,
      };

    case "SET_brightness_VALUE":
      return {
        ...state,
        brightness: payload,
      };

    case "TOGGLE_LOGIN":
      return {
        ...state,
        login: !payload.login,
      };

    case "SAVE_PICTURE":
      return {
        ...state,
        savePic: payload,
      };

    case "SHOW_SHORTCUTS":
      return {
        ...state,
        shortcuts: payload,
      };

    case "HIDE_SHORTCUTS":
      return {
        ...state,
        shortcuts: payload,
      };

    case "SET+OFFSETX":
      return {
        ...state,
        offsetX: state.offsetX + 5,
      };

    case "SET-OFFSETX":
      return {
        ...state,
        offsetX: state.offsetX - 5,
      };

    case "SET+OFFSETY":
      return {
        ...state,
        offsetY: state.offsetY + 5,
      };

    case "SET-OFFSETY":
      return {
        ...state,
        offsetY: state.offsetY - 5,
      };

    case "SET+SCALE":
      return {
        ...state,
        scale: state.scale + 0.1,
      };

    case "SET-SCALE":
      return {
        ...state,
        scale: state.scale - 0.1,
      };

    default:
      return state;
  }
}
