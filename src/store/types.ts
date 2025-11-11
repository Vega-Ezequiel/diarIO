import type { StoreApi } from 'zustand';
import type { VisualSlice } from './visual/types';

export type Store = VisualSlice;

export type Set = (value: (state: Store) => Store | Partial<Store>) => void;

export type Get = () => Store;