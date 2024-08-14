import { Routes } from "@angular/router";

import { BaseComponent } from "./components/base/base.component";
import { ExamComponent } from "./components/exam/exam.component";
import { HomeComponent } from "./components/home/home.component";
import { SettingsComponent } from "./components/settings/settings.component";

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "exam",
        component: ExamComponent,
    },
    {
        path: "base",
        component: BaseComponent,
    },
    {
        path: "settings",
        component: SettingsComponent,
    },
    { path: "", redirectTo: "home", pathMatch: "full" },
];
