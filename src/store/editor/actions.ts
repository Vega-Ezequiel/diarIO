import type { Editor } from '@tiptap/react';
import type { Set } from "../types";
import type { EditorActionsContainer } from "./types";

const setEditor = (set: Set) => (editor: Editor) => {
  set(() => ({ content: editor }))
}

const actions = (set: Set): EditorActionsContainer => ({
  editorActions: {
    setEditor: setEditor(set),
  },
});

export default actions;
