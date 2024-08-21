import { AsyncPipe, CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { TuiLabel } from "@taiga-ui/core";
import { TuiSwitch } from "@taiga-ui/kit";
import { Observable } from "rxjs";

import { selectExamMode } from "../../redux/selectors/exam.selectors";
import { ExamSettingsComponent } from "./exam-settings/exam-settings.component";
import { FormPatternComponent } from "./form-pattern/form-pattern.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TextfieldPatternComponent } from "./textfield-pattern/textfield-pattern.component";

@Component({
    selector: "app-exam",
    standalone: true,
    providers: [AsyncPipe],
    imports: [
        SidebarComponent,
        TuiSwitch,
        TuiLabel,
        FormsModule,
        ExamSettingsComponent,
        CommonModule,
        TextfieldPatternComponent,
        FormPatternComponent,
    ],
    templateUrl: "./exam.component.html",
    styleUrl: "./exam.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamComponent implements OnInit {
    examMode: Observable<number> | undefined;
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.examMode = this.store.select(selectExamMode);
    }
}
