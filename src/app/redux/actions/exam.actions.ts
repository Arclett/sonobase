import { createAction, props } from "@ngrx/store";

import { ExamActions } from "../../shared/models/exam.model";

export const showSide = createAction(
    ExamActions.SHOW_SIDE,
    props<{ visible: boolean }>()
);
