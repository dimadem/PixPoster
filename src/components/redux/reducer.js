export default function reducer(state, { type, payload }) {
  switch (type) {
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

    default:
      return state;
  }
}
