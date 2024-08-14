import { AsyncPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { TuiLabel } from "@taiga-ui/core";
import { TuiSegmented, TuiSwitch } from "@taiga-ui/kit";

import { selectMode, showSide } from "../../../redux/actions/exam.actions";
import {
    selectExamMode,
    selectSideVisible,
} from "../../../redux/selectors/exam.selectors";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: "app-exam-settings",
    standalone: true,
    providers: [AsyncPipe],
    imports: [SidebarComponent, TuiSwitch, TuiLabel, FormsModule, TuiSegmented],
    templateUrl: "./exam-settings.component.html",
    styleUrl: "./exam-settings.component.scss",
})
export class ExamSettingsComponent implements OnInit {
    isVisible: boolean = true;
    activeMode = 0;
    constructor(private store: Store, private AsyncPipe: AsyncPipe) {}
    ngOnInit(): void {
        this.isVisible = this.AsyncPipe.transform(this.store.select(selectSideVisible)) || false;
        this.activeMode = this.AsyncPipe.transform(this.store.select(selectExamMode)) || 0;
    }

    onChange() {
        this.store.dispatch(showSide({ visible: this.isVisible }));
    }

    onSelectMode() {
        this.store.dispatch(selectMode({ index: this.activeMode }));
    }
}
