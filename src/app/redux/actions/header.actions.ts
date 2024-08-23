import { createAction } from "@ngrx/store";

import { HeaderActions } from "../../shared/models/header.model";

export const showModal = createAction(HeaderActions.SHOW_MODAL);
