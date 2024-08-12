import { createAction, props } from "@ngrx/store";

import { HeaderActions } from "../../shared/models/header.model";

export const showSide = createAction(
    HeaderActions.SHOW_SIDE,
    props<{ visible: boolean }>()
);
