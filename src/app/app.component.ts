import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { GithubSummaryComponent } from './github-summary/github-summary.component';
import { buildGithubSummaryUrl, SITE_CONFIG } from './site.config';

type Lang = 'en' | 'ru';
type Theme = 'light' | 'dark';

type ShowcaseItem = {
  header: string;
  description: string;
  imgUrl: string;
  extUrl?: string;
  tag: string;
};

type AppCopy = {
  menu: {
    materials: string;
    projects: string;
    contact: string;
    language: string;
    theme: string;
  };
  heroKicker: string;
  heroLead: string;
  readMaterials: string;
  exploreProjects: string;
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
  materials: ShowcaseItem[];
  projects: ShowcaseItem[];
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

  private readonly copy: Record<Lang, AppCopy> = {
    en: {
      menu: {
        materials: 'Materials',
        projects: 'Projects',
        contact: 'Contact',
        language: 'Language switch',
        theme: 'Toggle dark theme'
      },
      heroKicker: 'Software Engineer • Community Builder',
      heroLead: 'I build practical software, write technical stories, and turn delivery chaos into repeatable systems.',
      readMaterials: 'Read materials',
      exploreProjects: 'Explore projects',
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
      emailLabel: 'Email',
      materials: [
        {
          header: 'Automation through the eyes of a developer: GitHub Actions for a startup',
          description: 'The article explains GitHub Actions from a practical perspective.\nWe analyzed repetitive operational tasks and moved them to automation.\nIt is a hands-on guide for developers starting their automation journey.',
          imgUrl: 'assets/material-logo.png',
          extUrl: 'https://habr.com/ru/post/595627/',
          tag: 'github-actions-material'
        },
        {
          header: 'Hackathon is the solution',
          description: 'This material was inspired by hackathons where I participated and organized events.\nIt explains how hackathons create value for organizers, sponsors and participants.\nThe article also covers two practical participation scenarios.',
          imgUrl: 'assets/01.jpg',
          extUrl: 'https://habr.com/ru/post/414755/',
          tag: 'hackathon-material'
        },
        {
          header: 'How a tester saved a full working day using Visual Studio automation',
          description: 'Prepared together with the Test IT team.\nIt shows how IDE extensions help teams move faster and reduce repetitive work.\nAn example extension for Visual Studio was built as part of the article.',
          imgUrl: 'assets/02.png',
          extUrl: 'https://habr.com/ru/company/microsoft/blog/488566/',
          tag: 'vs-extension-material'
        },
        {
          header: 'How webhooks simplified team communication',
          description: 'The article explores communication gaps in engineering teams and practical ways to fix them.\nAlongside the publication, I built a chatbot prototype on Bot Framework hosted in Azure.',
          imgUrl: 'assets/03.png',
          extUrl: 'https://habr.com/ru/post/481654/',
          tag: 'chat-bot-material'
        },
        {
          header: 'Hour of Code',
          description: 'As part of MSP and the Hour of Code campaign, we ran educational sessions for school students.\nAll classes completed tasks and received certificates, and the event delivered strong engagement.',
          imgUrl: 'assets/04.png',
          tag: 'hour-of-code-event'
        },
        {
          header: 'Student hackathon “math_hack”',
          description: 'As part of MSP, our student team organized the first university hackathon.\nWe handled sponsorship, schedule, branding and promotion, and gathered more than fifty participants.',
          imgUrl: 'assets/05.png',
          extUrl: 'http://www.gsu.by/ru/node/449',
          tag: 'student-hackathon-event'
        }
      ],
      projects: [
        {
          header: 'Lord of Time',
          description: 'A mobile app to track time allocation across life areas.\nThe backend included 15+ microservices with Nginx, ASP.NET Web API, PostgreSQL, bots and Docker.',
          imgUrl: 'assets/06.png',
          tag: 'lord-of-time-project'
        },
        {
          header: 'Visual Studio Extension',
          description: 'A helper extension for the Test IT platform built with Visual Studio SDK.\nIt can display auto-test logs and publish test metadata to Test IT TMS.',
          imgUrl: 'assets/07.png',
          extUrl: 'https://github.com/developman2013/Test-IT-VS-Extension-sample',
          tag: 'vs-extension-project'
        },
        {
          header: 'Platform chatbot',
          description: 'A Bot Framework and .NET Core chatbot for the Test IT platform.\nIt sends status notifications to users and groups in Telegram and Slack.',
          imgUrl: 'assets/08.png',
          extUrl: 'https://github.com/developman2013/TestIT-bot-sample',
          tag: 'chat-bot-project'
        }
      ]
    },
    ru: {
      menu: {
        materials: 'Материалы',
        projects: 'Проекты',
        contact: 'Контакты',
        language: 'Переключение языка',
        theme: 'Переключить темную тему'
      },
      heroKicker: 'Инженер-программист • Создатель сообществ',
      heroLead: 'Я создаю практичные продукты, пишу технические материалы и превращаю хаос в поставке в повторяемые процессы.',
      readMaterials: 'Читать материалы',
      exploreProjects: 'Смотреть проекты',
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
      emailLabel: 'Почта',
      materials: [
        {
          header: 'Автоматизация глазами разработчика: GitHub Actions для стартапа',
          description: 'Материал объясняет GitHub Actions на практических примерах.\nМы проанализировали рутинные операционные задачи и вынесли их в автоматизацию.\nСтатья полезна разработчикам, которые только начинают путь в автоматизации.',
          imgUrl: 'assets/material-logo.png',
          extUrl: 'https://habr.com/ru/post/595627/',
          tag: 'github-actions-material'
        },
        {
          header: 'Хакатон как решение',
          description: 'Материал написан по мотивам хакатонов, где я участвовал и выступал организатором.\nВ статье показывается польза хакатонов для организаторов, спонсоров и участников.\nТакже разбираются два практических сценария участия.',
          imgUrl: 'assets/01.jpg',
          extUrl: 'https://habr.com/ru/post/414755/',
          tag: 'hackathon-material'
        },
        {
          header: 'Как тестировщик сэкономил рабочий день с помощью автоматизации в Visual Studio',
          description: 'Материал подготовлен вместе с командой Test IT.\nВ статье показано, как расширения IDE ускоряют работу команды и снимают рутину.\nВ рамках публикации был разработан пример расширения для Visual Studio.',
          imgUrl: 'assets/02.png',
          extUrl: 'https://habr.com/ru/company/microsoft/blog/488566/',
          tag: 'vs-extension-material'
        },
        {
          header: 'Как вебхуки упростили командную коммуникацию',
          description: 'Материал посвящен проблемам коммуникации в инженерной команде и практическим способам их решения.\nВместе со статьей был реализован прототип чат-бота на Bot Framework в Azure.',
          imgUrl: 'assets/03.png',
          extUrl: 'https://habr.com/ru/post/481654/',
          tag: 'chat-bot-material'
        },
        {
          header: 'Час кода',
          description: 'В рамках программы MSP и кампании Hour of Code мы провели занятия для школьников.\nВсе классы выполнили задания и получили сертификаты, а мероприятие дало отличный отклик.',
          imgUrl: 'assets/04.png',
          tag: 'hour-of-code-event'
        },
        {
          header: 'Студенческий хакатон «math_hack»',
          description: 'В рамках MSP наша студенческая команда организовала первый университетский хакатон.\nМы собрали спонсоров, подготовили расписание и промо, и привлекли более 50 участников.',
          imgUrl: 'assets/05.png',
          extUrl: 'http://www.gsu.by/ru/node/449',
          tag: 'student-hackathon-event'
        }
      ],
      projects: [
        {
          header: 'Lord of Time',
          description: 'Мобильное приложение для учета времени по жизненным направлениям.\nСерверная часть включала 15+ микросервисов с Nginx, ASP.NET Web API, PostgreSQL, ботами и Docker.',
          imgUrl: 'assets/06.png',
          tag: 'lord-of-time-project'
        },
        {
          header: 'Расширение для Visual Studio',
          description: 'Вспомогательное расширение для платформы Test IT на Visual Studio SDK.\nПоказывает логи автотестов и отправляет метаданные тестов в Test IT TMS.',
          imgUrl: 'assets/07.png',
          extUrl: 'https://github.com/developman2013/Test-IT-VS-Extension-sample',
          tag: 'vs-extension-project'
        },
        {
          header: 'Чат-бот для платформы',
          description: 'Чат-бот на Bot Framework и .NET Core для платформы Test IT.\nОтправляет уведомления о статусах пользователям и группам в Telegram и Slack.',
          imgUrl: 'assets/08.png',
          extUrl: 'https://github.com/developman2013/TestIT-bot-sample',
          tag: 'chat-bot-project'
        }
      ]
    }
  };

  get t(): AppCopy {
    return this.copy[this.currentLang];
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
  }

  onThemeToggle() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    this.writeThemeToStorage(this.currentTheme);
  }

  anchorHref(fragment: 'materials' | 'projects'): string {
    return `?lang=${this.currentLang}#${fragment}`;
  }

  constructor() {
    this.writeLangToUrl(this.currentLang);
    this.applyTheme(this.currentTheme);
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

  private isLang(value: string | null | undefined): value is Lang {
    return value === 'en' || value === 'ru';
  }
}
