import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveComponentComponent } from './add-remove-component.component';

describe('AddRemoveComponentComponent', () => {
  let component: AddRemoveComponentComponent;
  let fixture: ComponentFixture<AddRemoveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRemoveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
