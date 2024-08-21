import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormPatternComponent } from "./form-pattern.component";

describe("FormPatternComponent", () => {
    let component: FormPatternComponent;
    let fixture: ComponentFixture<FormPatternComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormPatternComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormPatternComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
