import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdtTableLibComponent } from './mdt-table-lib.component';

describe('MdtTableLibComponent', () => {
  let component: MdtTableLibComponent;
  let fixture: ComponentFixture<MdtTableLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdtTableLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdtTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
