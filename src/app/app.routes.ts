import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "main",
        loadChildren: () => import("./components/main/main.routes").then((m) => m.mainRoutes),
    },
];
