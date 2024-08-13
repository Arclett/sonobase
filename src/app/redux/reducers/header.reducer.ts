import { createReducer, on } from "@ngrx/store";

import { HeaderState } from "../../shared/models/header.model";
import { changeTab } from "../actions/header.actions";

export const headerFeatureKey = "header";

export const initialState: HeaderState = {
    tabIndex: 0,
};

export const headerReducer = createReducer(
    initialState,
    on(changeTab, (state, { tabIndex }) => ({ ...state, tabIndex }))
);
