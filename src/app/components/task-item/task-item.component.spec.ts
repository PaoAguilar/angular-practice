import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksItemComponent } from './task-item.component';

describe('TasksItemComponent', () => {
  let component: TasksItemComponent;
  let fixture: ComponentFixture<TasksItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksItemComponent],
    });
    fixture = TestBed.createComponent(TasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
