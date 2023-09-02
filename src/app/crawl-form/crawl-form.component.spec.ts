import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlFormComponent } from './crawl-form.component';

describe('CrawlFormComponent', () => {
  let component: CrawlFormComponent;
  let fixture: ComponentFixture<CrawlFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlFormComponent]
    });
    fixture = TestBed.createComponent(CrawlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
