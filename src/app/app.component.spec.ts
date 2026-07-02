import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const sectionIds = ['top', 'experience', 'materials', 'projects', 'contact'] as const;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the portfolio owner name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Mikhail Pirahouski');
  });

  it('should render the experience section entry point', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#experience h2')?.textContent).toContain('Work Experience');
  });

  it('should update the active menu section from the scroll position', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    mockSectionOffsets({
      top: 0,
      experience: 240,
      materials: 860,
      projects: 1420,
      contact: 2100
    });

    spyOnProperty(window, 'scrollY', 'get').and.returnValue(920);

    app.onViewportChanged();

    expect(app.activeSection).toBe('materials');
  });

  it('should resync the active section after the view initializes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const syncActiveSectionSpy = spyOn<any>(app, 'syncActiveSection');
    const requestAnimationFrameSpy = spyOn(window, 'requestAnimationFrame').and.callFake((callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });

    app.ngAfterViewInit();

    expect(requestAnimationFrameSpy).toHaveBeenCalled();
    expect(syncActiveSectionSpy).toHaveBeenCalled();
  });

  function mockSectionOffsets(offsets: Record<(typeof sectionIds)[number], number>) {
    const elements = new Map<string, HTMLElement>();

    for (const sectionId of sectionIds) {
      const element = document.createElement('section');
      Object.defineProperty(element, 'offsetTop', {
        configurable: true,
        value: offsets[sectionId]
      });
      elements.set(sectionId, element);
    }

    spyOn(document, 'getElementById').and.callFake((id: string) => elements.get(id) ?? null);
  }
});
