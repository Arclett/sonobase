import { isDevMode } from "@angular/core";
import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { authReducer } from "./auth.reducer";
import { examReducer } from "./exam.reducer";
import { headerReducer } from "./header.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
    exam: examReducer,
    header: headerReducer,
    router: routerReducer,
    auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
