import { createReducer, on } from "@ngrx/store";

import { SidebarState } from "../../shared/models/sidebar.models";
import { showSide } from "../actions/exam.actions";

export const sidebarFeatureKey = "sidebar";

export const initialState: SidebarState = {
    visible: false,
};

export const sidebarReducer = createReducer(
    initialState,
    on(showSide, (state) => ({ ...state, visible: !state.visible }))
);
