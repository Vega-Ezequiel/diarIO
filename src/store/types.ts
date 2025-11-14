import type { EditorSlice } from './editor/types';
import type { VisualSlice } from './visual/types';

export type Store = VisualSlice & EditorSlice;

export type Set = (value: (state: Store) => Store | Partial<Store>) => void;

export type Get = () => Store;
