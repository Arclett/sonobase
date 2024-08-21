import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TextfieldPatternComponent } from "./textfield-pattern.component";

describe("TextfieldPatternComponent", () => {
    let component: TextfieldPatternComponent;
    let fixture: ComponentFixture<TextfieldPatternComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TextfieldPatternComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TextfieldPatternComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
