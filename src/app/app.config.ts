import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";

import { routes } from "./app.routes";
import { metaReducers, reducers } from "./redux/reducers";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        importProvidersFrom(RouterModule.forRoot(routes)),
        provideStore(reducers, { metaReducers }),
        provideAnimationsAsync(),
        provideEffects(),
    ],
};
