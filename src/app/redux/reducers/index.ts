import { isDevMode } from "@angular/core";
import {
    ActionReducerMap,
    MetaReducer,
} from "@ngrx/store";

import { sidebarReducer } from "./sidebar.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
    sidebar: sidebarReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
