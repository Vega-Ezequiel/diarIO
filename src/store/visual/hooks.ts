import type { Store } from "../types";
import type { Snackbar, VisualStoreActions } from "./types";

import { DarIOStore } from "../index";

export const useActionsVisual = (): VisualStoreActions =>
  DarIOStore((state: Store) => state.visualActions);

export const useloading = (): boolean =>
  DarIOStore((state: Store) => state.isLoading);

export const useSnackbar = (): Snackbar =>
  DarIOStore((state: Store) => state.snackbar);
