import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, NgModel, ReactiveFormsModule } from "@angular/forms";
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorTool,
} from "@taiga-ui/editor";

@Component({
    selector: "app-textfield-pattern",
    standalone: true,
    imports: [TuiEditor, ReactiveFormsModule],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
        NgModel,
        FormControl,
    ],
    templateUrl: "./textfield-pattern.component.html",
    styleUrl: "./textfield-pattern.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldPatternComponent {
    readonly tools = [TuiEditorTool.Undo, TuiEditorTool.Sup, TuiEditorTool.Clear];
    readonly control = new FormControl();
    readonly height = "70vh";
}
