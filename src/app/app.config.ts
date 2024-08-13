import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideRouterStore } from "@ngrx/router-store";
import { provideStore } from "@ngrx/store";
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";

import { routes } from "./app.routes";
import { metaReducers, reducers } from "./redux/reducers";

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        importProvidersFrom(RouterModule.forRoot(routes)),
        provideStore(reducers, { metaReducers }),
        provideAnimationsAsync(),
        provideEffects(),
        NG_EVENT_PLUGINS,
        provideRouterStore(),
    ],
};
