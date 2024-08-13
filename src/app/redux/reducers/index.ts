import { isDevMode } from "@angular/core";
import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { headerReducer } from "./header.reducer";
import { sidebarReducer } from "./sidebar.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
    sidebar: sidebarReducer,
    header: headerReducer,
    router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
