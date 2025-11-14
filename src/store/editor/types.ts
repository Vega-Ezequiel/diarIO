import type { Editor } from '@tiptap/react';
import type { EditorState } from "./interface";

export type EditorStoreActions = {
  setEditor: (editor: Editor) => void;
};

export type EditorActionsContainer = {
  editorActions: EditorStoreActions;
};

export type EditorSlice = EditorActionsContainer & EditorState;
