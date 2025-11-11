import type { StateCreator } from "zustand";
import type { Store } from "../types";
import type { VisualSlice } from "./types";

import actions from "./actions";
import initialState from "./state";

export const createVisualSlice: StateCreator<Store, [], [], VisualSlice> = (
  set,
) => ({
  ...initialState,
  ...actions(set),
});
