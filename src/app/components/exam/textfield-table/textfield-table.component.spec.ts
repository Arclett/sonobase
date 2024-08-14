import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TextfieldTableComponent } from "./textfield-table.component";

describe("TextfieldTableComponent", () => {
    let component: TextfieldTableComponent;
    let fixture: ComponentFixture<TextfieldTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TextfieldTableComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TextfieldTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
