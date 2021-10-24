import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TABLACONTACTENOSComponent } from './tabla-contactenos.component';

describe('TABLACONTACTENOSComponent', () => {
  let component: TABLACONTACTENOSComponent;
  let fixture: ComponentFixture<TABLACONTACTENOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TABLACONTACTENOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TABLACONTACTENOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
