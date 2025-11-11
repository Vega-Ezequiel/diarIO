import type { Store } from "../types";
import type { VisualStoreActions } from "./types";

import { DarIOStore } from "../index";

export const useActionsI18n = (): VisualStoreActions =>
  DarIOStore((state: Store) => state.visualActions);

export const useloading = (): boolean =>
  DarIOStore((state: Store) => state.isLoading);
