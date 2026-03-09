import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { GithubSummaryComponent } from './github-summary/github-summary.component';
import { APP_CONTENT, Lang, ShowcaseItem } from './content.config';
import { buildGithubSummaryUrl, SITE_CONFIG } from './site.config';

type Theme = 'light' | 'dark';
type Section = 'top' | 'materials' | 'projects' | 'contact';
type AnalyticsProps = Record<string, string | number | boolean>;

type AppCopy = {
  seoTitle: string;
  seoDescription: string;
  menu: {
    materials: string;
    projects: string;
    contact: string;
    language: string;
    theme: string;
  };
  heroKicker: string;
  heroLead: string;
  skipToContent: string;
  readMaterials: string;
  exploreProjects: string;
  featuredTitle: string;
  featuredLead: string;
  materialsTitle: string;
  materialsLead: string;
  projectsTitle: string;
  projectsLead: string;
  githubTitle: string;
  githubLead: string;
  githubOpenProfile: string;
  contactTitle: string;
  contactLead: string;
  contactCardTitle: string;
  contactCardText: string;
  openSourceLabel: string;
  telegramLabel: string;
  emailLabel: string;
};

@Component({
  selector: 'app-root',
  imports: [MenuComponent, CardComponent, ContactComponent, GithubSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly name = 'Mikhail Pirahouski';
  readonly githubProfileUrl = SITE_CONFIG.github.profileUrl;
  currentLang: Lang = this.detectLangFromUrl();
  currentTheme: Theme = this.detectTheme();
  activeSection: Section = 'top';

  private canonicalLinkEl: HTMLLinkElement | null = null;
  private readonly baseUrl = 'https://pirahouski.com';

  private readonly copy: Record<Lang, AppCopy> = {
    en: {
      seoTitle: 'Mikhail Pirahouski | Software Engineer Portfolio',
      seoDescription: 'Portfolio of Mikhail Pirahouski: engineering projects, technical publications, and collaboration contacts.',
      menu: {
        materials: 'Materials',
        projects: 'Projects',
        contact: 'Contact',
        language: 'Language switch',
        theme: 'Toggle dark theme'
      },
      heroKicker: 'Software Engineer • Community Builder',
      heroLead: 'I build practical software, write technical stories, and turn delivery chaos into repeatable systems.',
      skipToContent: 'Skip to content',
      readMaterials: 'Read materials',
      exploreProjects: 'Explore projects',
      featuredTitle: 'Featured project',
      featuredLead: 'Highlighted production-facing project from my portfolio.',
      materialsTitle: 'Materials',
      materialsLead: 'Selected publications on automation and engineering productivity.',
      projectsTitle: 'Code & Projects',
      projectsLead: 'Production-facing products and developer tooling.',
      githubTitle: 'GitHub Profile Snapshot',
      githubLead: 'Live activity summary generated from my GitHub profile.',
      githubOpenProfile: 'Open GitHub profile',
      contactTitle: 'Contact',
      contactLead: 'Open for collaboration, product engineering and speaking opportunities.',
      contactCardTitle: 'Let\'s talk',
      contactCardText: 'If you want to discuss engineering leadership, product delivery, or collaboration opportunities, I am available.',
      openSourceLabel: 'Open source',
      telegramLabel: 'Telegram',
      emailLabel: 'Email'
    },
    ru: {
      seoTitle: 'Михаил Пирахоуски | Портфолио инженера-программиста',
      seoDescription: 'Портфолио Михаила Пирахоуски: инженерные проекты, технические публикации и контакты для сотрудничества.',
      menu: {
        materials: 'Материалы',
        projects: 'Проекты',
        contact: 'Контакты',
        language: 'Переключение языка',
        theme: 'Переключить темную тему'
      },
      heroKicker: 'Инженер-программист • Создатель сообществ',
      heroLead: 'Я создаю практичные продукты, пишу технические материалы и превращаю хаос в поставке в повторяемые процессы.',
      skipToContent: 'Перейти к содержанию',
      readMaterials: 'Читать материалы',
      exploreProjects: 'Смотреть проекты',
      featuredTitle: 'Рекомендуемый проект',
      featuredLead: 'Выделенный продуктовый проект из моего портфолио.',
      materialsTitle: 'Материалы',
      materialsLead: 'Выбранные публикации про автоматизацию и инженерную эффективность.',
      projectsTitle: 'Код и проекты',
      projectsLead: 'Продуктовые решения и инструменты для разработчиков.',
      githubTitle: 'Сводка GitHub профиля',
      githubLead: 'Актуальная карточка активности, собранная на основе моего GitHub профиля.',
      githubOpenProfile: 'Открыть GitHub профиль',
      contactTitle: 'Контакты',
      contactLead: 'Открыт к сотрудничеству, продуктовой разработке и выступлениям.',
      contactCardTitle: 'Свяжитесь со мной',
      contactCardText: 'Если хотите обсудить инженерное лидерство, поставку продукта или сотрудничество, буду рад пообщаться.',
      openSourceLabel: 'Открыть источник',
      telegramLabel: 'Телеграм',
      emailLabel: 'Почта'
    }
  };

  get t(): AppCopy {
    return this.copy[this.currentLang];
  }

  get materials(): ShowcaseItem[] {
    return APP_CONTENT[this.currentLang].materials;
  }

  get projects(): ShowcaseItem[] {
    return APP_CONTENT[this.currentLang].projects;
  }

  get featuredProject(): ShowcaseItem {
    const content = APP_CONTENT[this.currentLang];
    return content.projects.find((item) => item.tag === content.featuredProjectTag) ?? content.projects[0];
  }

  get githubSummaryUrl(): string {
    return buildGithubSummaryUrl(this.currentTheme);
  }

  onLangChange(lang: Lang) {
    if (lang === this.currentLang) {
      return;
    }
    this.currentLang = lang;
    this.writeLangToUrl(lang);
    this.updateSeo();
    this.trackEvent('language_switch', { lang });
  }

  onThemeToggle() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    this.writeThemeToStorage(this.currentTheme);
    this.trackEvent('theme_toggle', { theme: this.currentTheme });
  }

  onCardCtaClick(tag: string) {
    this.trackEvent('card_cta_click', { tag, lang: this.currentLang });
  }

  onOpenGithubProfile() {
    this.trackEvent('github_profile_open', { lang: this.currentLang });
  }

  onTelegramOpen() {
    this.trackEvent('contact_telegram_open', { lang: this.currentLang });
  }

  onEmailOpen() {
    this.trackEvent('contact_email_open', { lang: this.currentLang });
  }

  anchorHref(fragment: 'materials' | 'projects'): string {
    return `?lang=${this.currentLang}#${fragment}`;
  }

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.writeLangToUrl(this.currentLang);
    this.applyTheme(this.currentTheme);
    this.updateSeo();
    this.syncActiveSection();
    this.initAnalytics();
  }

  @HostListener('window:scroll')
  @HostListener('window:hashchange')
  onViewportChanged() {
    this.syncActiveSection();
  }

  private detectLangFromUrl(): Lang {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const url = new URL(window.location.href);
    const queryLang = url.searchParams.get('lang');
    if (this.isLang(queryLang)) {
      return queryLang;
    }

    const firstPathSegment = url.pathname.split('/').filter(Boolean)[0];
    if (this.isLang(firstPathSegment)) {
      return firstPathSegment;
    }

    return 'en';
  }

  private writeLangToUrl(lang: Lang) {
    if (typeof window === 'undefined') {
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  private detectTheme(): Theme {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private writeThemeToStorage(theme: Theme) {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: Theme) {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  private syncActiveSection() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (this.isSection(hash)) {
      this.activeSection = hash;
      return;
    }

    const sections: Section[] = ['top', 'materials', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 140;

    for (let i = sections.length - 1; i >= 0; i--) {
      const id = sections[i];
      const node = document.getElementById(id);
      if (node && node.offsetTop <= scrollPosition) {
        this.activeSection = id;
        return;
      }
    }

    this.activeSection = 'top';
  }

  private updateSeo() {
    if (typeof window === 'undefined') {
      return;
    }

    const text = this.t;
    this.title.setTitle(text.seoTitle);

    const canonicalUrl = `${this.baseUrl}/?lang=${this.currentLang}`;
    this.document.documentElement.setAttribute('lang', this.currentLang);

    this.meta.updateTag({ name: 'description', content: text.seoDescription });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Mikhail Pirahouski' });
    this.meta.updateTag({ property: 'og:title', content: text.seoTitle });
    this.meta.updateTag({ property: 'og:description', content: text.seoDescription });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl}/assets/me.jpg` });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: text.seoTitle });
    this.meta.updateTag({ name: 'twitter:description', content: text.seoDescription });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}/assets/me.jpg` });

    this.ensureCanonical(canonicalUrl);
    this.ensureHreflangLinks();
    this.updateStructuredData();
  }

  private ensureCanonical(canonicalUrl: string) {
    if (!this.canonicalLinkEl) {
      this.canonicalLinkEl = this.document.createElement('link');
      this.canonicalLinkEl.setAttribute('rel', 'canonical');
      this.document.head.appendChild(this.canonicalLinkEl);
    }
    this.canonicalLinkEl.setAttribute('href', canonicalUrl);
  }

  private ensureHreflangLinks() {
    this.upsertAltLink('en', `${this.baseUrl}/?lang=en`);
    this.upsertAltLink('ru', `${this.baseUrl}/?lang=ru`);
    this.upsertAltLink('x-default', `${this.baseUrl}/?lang=en`);
  }

  private upsertAltLink(hreflang: string, href: string) {
    const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
    let link = this.document.head.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private updateStructuredData() {
    const scriptId = 'structured-data-jsonld';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    const primaryMaterial = this.materials[0];
    const primaryProject = this.projects[0];

    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: this.name,
          url: `${this.baseUrl}/`,
          image: `${this.baseUrl}/assets/me.jpg`,
          sameAs: [this.githubProfileUrl, 'https://t.me/mihailych007'],
          jobTitle: this.currentLang === 'ru' ? 'Инженер-программист' : 'Software Engineer'
        },
        {
          '@type': 'WebSite',
          name: this.name,
          url: `${this.baseUrl}/`,
          inLanguage: [this.currentLang]
        },
        {
          '@type': 'CreativeWork',
          name: primaryMaterial.header,
          description: primaryMaterial.description.split('\n')[0],
          url: primaryMaterial.extUrl ?? `${this.baseUrl}/#materials`,
          inLanguage: this.currentLang
        },
        {
          '@type': 'CreativeWork',
          name: primaryProject.header,
          description: primaryProject.description.split('\n')[0],
          url: primaryProject.extUrl ?? `${this.baseUrl}/#projects`,
          inLanguage: this.currentLang
        }
      ]
    };

    script.textContent = JSON.stringify(graph);
  }

  private isLang(value: string | null | undefined): value is Lang {
    return value === 'en' || value === 'ru';
  }

  private isSection(value: string | null | undefined): value is Section {
    return value === 'top' || value === 'materials' || value === 'projects' || value === 'contact';
  }

  private initAnalytics() {
    if (typeof document === 'undefined') {
      return;
    }

    const analytics = SITE_CONFIG.analytics;
    if (!analytics.enabled || analytics.provider !== 'plausible') {
      return;
    }

    if (!document.querySelector(`script[src="${analytics.scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset['domain'] = analytics.domain;
      script.src = analytics.scriptUrl;
      document.head.appendChild(script);
    }
  }

  private trackEvent(name: string, props: AnalyticsProps) {
    if (typeof window === 'undefined') {
      return;
    }

    const plausible = (window as Window & { plausible?: (eventName: string, eventData?: { props?: AnalyticsProps }) => void }).plausible;
    plausible?.(name, { props });
  }
}
