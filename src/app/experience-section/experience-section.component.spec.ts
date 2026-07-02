import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceSectionComponent } from './experience-section.component';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent],
      providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('currentLang', 'en');
    fixture.componentRef.setInput('copy', {
      eyebrow: 'Career timeline',
      title: 'Work Experience',
      lead: 'Lead',
      highlightsLabel: 'Core contributions',
      stackLabel: 'Stack'
    });

    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    const req = httpMock.expectOne('assets/experience.json');
    req.flush({ en: [], ru: [] });

    expect(component).toBeTruthy();
  });

  it('should render experience items from json', () => {
    const req = httpMock.expectOne('assets/experience.json');
    req.flush({
      en: [
        {
          period: '2023',
          role: 'Software Engineer',
          project: 'Portal',
          summary: 'Summary',
          highlights: ['Built it'],
          stack: ['Angular'],
          tag: 'portal'
        }
      ],
      ru: []
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.experience-topline h3')?.textContent).toContain('Portal');
  });
});
