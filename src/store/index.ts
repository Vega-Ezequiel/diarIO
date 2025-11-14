import type { Store } from "./types";

import { create } from "zustand";
import { devtools, createJSONStorage, persist } from "zustand/middleware";
import { createVisualSlice } from "./visual/slice";
import { createEditorSlice } from "./editor/slice";

export const DarIOStore = create<Store>()(
  persist(
    devtools((set, get, store) => ({
      ...createVisualSlice(set, get, store),
      ...createEditorSlice(set, get, store),
    })),
    {
      name: "diarIO-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (_state) => ({})
    }
  )
);
