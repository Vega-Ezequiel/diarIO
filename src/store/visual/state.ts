import type { VisualState } from "./interface";

const initialState: VisualState = {
  isLoading: false,
  snackbar: {
    type: "info",
    message: "",
  },
};

export default initialState;
