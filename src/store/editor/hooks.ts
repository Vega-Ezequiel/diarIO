import type { Editor } from '@tiptap/react';
import type { Store } from "../types";
import type { EditorStoreActions } from "./types";

import { DarIOStore } from "../index";

export const useActionsEditor = (): EditorStoreActions =>
  DarIOStore((state: Store) => state.editorActions);

export const useEditor = (): Editor | null | undefined =>
  DarIOStore((state: Store) => state.content);
