import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorElvesComponent } from './operador-elves.component';

describe('OperadorElvesComponent', () => {
  let component: OperadorElvesComponent;
  let fixture: ComponentFixture<OperadorElvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorElvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorElvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
