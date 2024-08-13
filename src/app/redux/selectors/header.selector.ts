import { createFeatureSelector, createSelector } from "@ngrx/store";

import { HeaderState } from "../../shared/models/header.model";
import { headerFeatureKey } from "../reducers/header.reducer";

export const selectHeaderFeature = createFeatureSelector<HeaderState>(headerFeatureKey);

export const selectTabIndex = createSelector(
    selectHeaderFeature,
    (state) => state.tabIndex
);
