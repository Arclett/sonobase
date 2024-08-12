import { createFeatureSelector, createSelector } from "@ngrx/store";

import { SidebarState } from "../../shared/models/sidebar.models";
import { sidebarFeatureKey } from "../reducers/sidebar.reducer";

export const selectSideBarFeature = createFeatureSelector<SidebarState>(sidebarFeatureKey);

export const selectVisible = createSelector(
    selectSideBarFeature,
    (state) => state.visible
);
