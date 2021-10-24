import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTENIDOComponent } from './contenido.component';

describe('CONTENIDOComponent', () => {
  let component: CONTENIDOComponent;
  let fixture: ComponentFixture<CONTENIDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTENIDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTENIDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
