import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import type { TuiDialogContext } from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/legacy";
import { POLYMORPHEUS_CONTEXT } from "@taiga-ui/polymorpheus";

import { signIn } from "../../../redux/actions/auth.actions";
import { FirebaseService } from "../../../services/firebase.service";

@Component({
    selector: "app-auth",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TuiInputModule],
    templateUrl: "./auth.component.html",
    styleUrl: "./auth.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
    private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);
    protected readonly testForm = new FormGroup({
        testValue: new FormControl("mail"),
        testValue1: new FormControl("password"),
    });
    constructor(private firebase: FirebaseService, private store: Store) {}

    createUser() {
        const login = this.testForm.controls.testValue.value || "";
        const pass = this.testForm.controls.testValue1.value || "";
        // this.firebase.signUp(login, pass);
        this.store.dispatch(signIn({ name: login, password: pass }));
    // this.context.completeWith();
    }
}
