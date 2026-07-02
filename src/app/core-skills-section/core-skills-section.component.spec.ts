import { provideHttpClient, withXhr } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreSkillsSectionComponent } from './core-skills-section.component';

describe('CoreSkillsSectionComponent', () => {
  let fixture: ComponentFixture<CoreSkillsSectionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSkillsSectionComponent],
      providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoreSkillsSectionComponent);
    fixture.componentRef.setInput('currentLang', 'en');
    fixture.componentRef.setInput('copy', {
      eyebrow: 'Core stack',
      title: 'Skills',
      lead: 'Selected skills'
    });

    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should render skill groups from json', () => {
    const req = httpMock.expectOne('assets/core-skills.json');
    req.flush({
      en: [{ title: 'Frontend', summary: 'UI work', items: ['Angular'] }],
      ru: []
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.core-skill-card h3')?.textContent).toContain('Frontend');
    expect(compiled.querySelector('.core-skill-tags span')?.textContent).toContain('Angular');
  });
});
