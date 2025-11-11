import type { VisualState } from './interface';

export type VisualStoreActions = {
    setLoading: (loading: boolean) => void;
}

export type VisualActionsContainer = {
    visualActions: VisualStoreActions;
}

export type VisualSlice = VisualActionsContainer & VisualState;
