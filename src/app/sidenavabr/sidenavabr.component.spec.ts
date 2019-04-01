import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavabrComponent } from './sidenavabr.component';

describe('SidenavabrComponent', () => {
  let component: SidenavabrComponent;
  let fixture: ComponentFixture<SidenavabrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavabrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
