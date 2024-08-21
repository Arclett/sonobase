import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ExamState } from "../../shared/models/exam.model";
import { examFeatureKey } from "../reducers/exam.reducer";

export const selectExamFeature = createFeatureSelector<ExamState>(examFeatureKey);

export const selectSideVisible = createSelector(
    selectExamFeature,
    (state) => state.sideVisible
);

export const selectExamMode = createSelector(
    selectExamFeature,
    (state) => state.modeIndex
);
