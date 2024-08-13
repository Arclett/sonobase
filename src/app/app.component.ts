import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TuiRoot } from "@taiga-ui/core";

import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, TuiRoot],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "sonobase";
}
