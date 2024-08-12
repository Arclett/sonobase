import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { selectVisible } from "../../redux/selectors/sidebar.selector";

@Component({
    selector: "app-sidebar",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sidebar.component.html",
    styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent implements OnInit {
    isVisible: Observable<boolean> | undefined;
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.isVisible = this.store.select(selectVisible);
    }
}
