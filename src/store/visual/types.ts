import type { VisualState } from "./interface";

export type Snackbar = {
  type: "info" | "warn" | "error";
  message: string;
};

export type VisualStoreActions = {
  setLoading: (loading: boolean) => void;
  setSnackbar: (snackbar: Snackbar) => void;
};

export type VisualActionsContainer = {
  visualActions: VisualStoreActions;
};

export type VisualSlice = VisualActionsContainer & VisualState;
