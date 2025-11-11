import type { Set, Get } from "../types";
import type { VisualActionsContainer } from "./types";

const setLoading = (set: Set) => (loading: boolean): void => {
  set(() => ({ isLoading: loading }));
};

const actions = (set: Set): VisualActionsContainer => ({
  visualActions: {
    setLoading: setLoading(set),
  },
});

export default actions;
