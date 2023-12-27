import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadCredentionalsComponent } from './bad-credentionals.component';

describe('BadCredentionalsComponent', () => {
  let component: BadCredentionalsComponent;
  let fixture: ComponentFixture<BadCredentionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadCredentionalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadCredentionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
