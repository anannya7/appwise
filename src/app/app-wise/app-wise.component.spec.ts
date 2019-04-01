import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWiseComponent } from './app-wise.component';

describe('AppWiseComponent', () => {
  let component: AppWiseComponent;
  let fixture: ComponentFixture<AppWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
