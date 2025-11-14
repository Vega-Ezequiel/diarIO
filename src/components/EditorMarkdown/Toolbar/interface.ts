import type { ButtonAction } from "./types";

export interface ToolbarProps {
  onInsert: (action: ButtonAction) => void;
  onPublish: () => void;
}
