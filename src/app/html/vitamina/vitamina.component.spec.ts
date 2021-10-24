import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminaComponent } from './vitamina.component';

describe('VitaminaComponent', () => {
  let component: VitaminaComponent;
  let fixture: ComponentFixture<VitaminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
