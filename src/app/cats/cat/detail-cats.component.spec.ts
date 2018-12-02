import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCatsComponent } from './detail-cats.component';

describe('DetailCatsComponent', () => {
  let component: DetailCatsComponent;
  let fixture: ComponentFixture<DetailCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
