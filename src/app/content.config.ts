export type Lang = 'en' | 'ru';

export type ShowcaseItem = {
  header: string;
  description: string;
  imgUrl: string;
  extUrl?: string;
  tag: string;
};

type LocalizedContent = {
  featuredProjectTag: string;
  materials: ShowcaseItem[];
  projects: ShowcaseItem[];
};

export const APP_CONTENT: Record<Lang, LocalizedContent> = {
  en: {
    featuredProjectTag: 'lord-of-time-project',
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
    featuredProjectTag: 'lord-of-time-project',
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
