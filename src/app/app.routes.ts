import { Routes } from "@angular/router";

import { BaseComponent } from "./components/base/base.component";
import { ExamComponent } from "./components/exam/exam.component";
import { HomeComponent } from "./components/home/home.component";

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
    { path: "", redirectTo: "home", pathMatch: "full" },
    // {
    //     path: "main",
    //     loadChildren: () => import("./components/main/main.routes").then((m) => m.mainRoutes),
    // },
];
