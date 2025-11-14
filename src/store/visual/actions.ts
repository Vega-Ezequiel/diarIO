import type { Set } from "../types";
import type { Snackbar, VisualActionsContainer } from "./types";

const setLoading = (set: Set) => (loading: boolean): void => {
  set(() => ({ isLoading: loading }));
};

const setSnackbar = (set: Set) => (snackbar: Snackbar) => {
  set(() => ({ snackbar }))
}

const actions = (set: Set): VisualActionsContainer => ({
  visualActions: {
    setLoading: setLoading(set),
    setSnackbar: setSnackbar(set)
  },
});

export default actions;
