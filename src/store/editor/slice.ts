import type { StateCreator } from "zustand";
import type { Store } from "../types";
import type { EditorSlice } from "./types";

import actions from "./actions";
import initialState from "./state";

export const createEditorSlice: StateCreator<Store, [], [], EditorSlice> = (
  set,
) => ({
  ...initialState,
  ...actions(set),
});
