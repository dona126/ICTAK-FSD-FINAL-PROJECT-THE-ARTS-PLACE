import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvideoComponent } from './newvideo.component';

describe('NewvideoComponent', () => {
  let component: NewvideoComponent;
  let fixture: ComponentFixture<NewvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
