import { Route } from "@angular/router";

import { BaseComponent } from "../base/base.component";
import { ExamComponent } from "../exam/exam.component";
import { MainComponent } from "./main.component";

export const mainRoutes: Route[] = [
    {
        path: "",
        providers: [],
        children: [
            {
                path: "",
                component: MainComponent,
            },
            {
                path: "exam",
                component: ExamComponent,
            },
            {
                path: "base",
                component: BaseComponent,
            },
        ],
    },
];
