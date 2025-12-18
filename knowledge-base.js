// VЛАДОНИ Company Knowledge Base
const knowledgeBase = {
    company: {
        name: "VЛАДОНИ",
        fullName: "VЛАДОНИ - Инновационные решения для вашего бизнеса",
        description: "VЛАДОНИ - это современная компания, специализирующаяся на разработке программного обеспечения, IT-консалтинге и цифровой трансформации бизнеса.",
        founded: "2018",
        employees: "50+",
        slogan: "Технологии, которые работают на вас"
    },

    contacts: {
        phone: "+7 (495) 123-45-67",
        phoneSupport: "+7 (800) 555-35-35 (бесплатно по России)",
        email: "info@vladoni.ru",
        supportEmail: "support@vladoni.ru",
        address: "Москва, ул. Инновационная, д. 42, офис 301",
        workingHours: "Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной",
        website: "www.vladoni.ru",
        telegram: "@vladoni_support",
        socialMedia: {
            vk: "vk.com/vladoni",
            telegram: "t.me/vladoni_channel",
            youtube: "youtube.com/@vladoni"
        }
    },

    services: [
        {
            id: 1,
            name: "Разработка веб-приложений",
            description: "Создание современных веб-приложений любой сложности: от лендингов до корпоративных порталов и SaaS-решений.",
            price: "от 150 000 ₽",
            duration: "от 2 недель",
            features: ["Адаптивный дизайн", "SEO-оптимизация", "Интеграция с CRM", "Техническая поддержка"]
        },
        {
            id: 2,
            name: "Мобильная разработка",
            description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.",
            price: "от 300 000 ₽",
            duration: "от 1 месяца",
            features: ["iOS и Android", "React Native / Flutter", "Push-уведомления", "Оффлайн режим"]
        },
        {
            id: 3,
            name: "IT-консалтинг",
            description: "Аудит IT-инфраструктуры, оптимизация бизнес-процессов, разработка IT-стратегии.",
            price: "от 50 000 ₽",
            duration: "от 3 дней",
            features: ["Аудит систем", "Оптимизация процессов", "Roadmap развития", "Подбор технологий"]
        },
        {
            id: 4,
            name: "Техническая поддержка",
            description: "Круглосуточная поддержка и сопровождение IT-систем, мониторинг, обновления.",
            price: "от 30 000 ₽/мес",
            duration: "ежемесячно",
            features: ["Поддержка 24/7", "Мониторинг систем", "Резервное копирование", "Обновления безопасности"]
        },
        {
            id: 5,
            name: "Интеграция систем",
            description: "Интеграция различных бизнес-систем: 1С, CRM, ERP, платёжные системы, API.",
            price: "от 80 000 ₽",
            duration: "от 1 недели",
            features: ["API интеграции", "1С интеграция", "CRM системы", "Платёжные шлюзы"]
        },
        {
            id: 6,
            name: "Чат-боты и автоматизация",
            description: "Разработка чат-ботов для Telegram, WhatsApp, VK и автоматизация бизнес-процессов.",
            price: "от 45 000 ₽",
            duration: "от 5 дней",
            features: ["Telegram боты", "WhatsApp боты", "AI-интеграция", "Аналитика"]
        }
    ],

    pricing: {
        hourlyRate: "от 3 000 ₽/час",
        minimumProject: "от 50 000 ₽",
        paymentMethods: ["Безналичный расчёт", "Банковские карты", "Электронные кошельки"],
        paymentTerms: "Предоплата 50%, остаток после сдачи проекта",
        discounts: {
            startup: "15% скидка для стартапов",
            longterm: "10% скидка при заключении контракта на год",
            referral: "5% за каждого приведённого клиента"
        }
    },

    guarantee: {
        warranty: "12 месяцев гарантии на все разработки",
        support: "Бесплатная техническая поддержка в течение 3 месяцев после сдачи проекта",
        bugFixes: "Бесплатное исправление багов в течение гарантийного срока",
        sla: "SLA 99.9% для услуг хостинга и поддержки",
        refund: "Возврат средств в течение 14 дней, если работы не начаты"
    },

    faq: [
        {
            question: "Как начать работу с VЛАДОНИ?",
            answer: "Свяжитесь с нами любым удобным способом: по телефону, email или через форму на сайте. Мы проведём бесплатную консультацию, обсудим ваши задачи и предложим оптимальное решение."
        },
        {
            question: "Сколько стоит разработка сайта?",
            answer: "Стоимость зависит от сложности проекта. Простой лендинг — от 50 000 ₽, корпоративный сайт — от 150 000 ₽, интернет-магазин — от 250 000 ₽, сложные веб-приложения — от 500 000 ₽."
        },
        {
            question: "Какие сроки разработки?",
            answer: "Сроки зависят от объёма работ. Лендинг — 1-2 недели, корпоративный сайт — 3-6 недель, мобильное приложение — 2-4 месяца. Точные сроки определяются после анализа требований."
        },
        {
            question: "Работаете ли вы с регионами?",
            answer: "Да, мы работаем со всеми регионами России и странами СНГ. Большинство коммуникаций ведётся онлайн через видеозвонки и мессенджеры."
        },
        {
            question: "Какие технологии вы используете?",
            answer: "Мы используем современный стек: React, Vue.js, Node.js, Python, Go, PostgreSQL, MongoDB, AWS, Docker, Kubernetes. Выбор технологий зависит от задач проекта."
        },
        {
            question: "Предоставляете ли вы исходный код?",
            answer: "Да, после полной оплаты проекта вы получаете все права на исходный код и можете использовать его по своему усмотрению."
        },
        {
            question: "Есть ли у вас готовые решения?",
            answer: "Да, у нас есть ряд готовых продуктов: CRM для малого бизнеса, система управления заказами, платформа для онлайн-обучения. Их можно адаптировать под ваши нужды."
        },
        {
            question: "Как происходит оплата?",
            answer: "Стандартная схема: 50% предоплата, 50% после сдачи проекта. Для крупных проектов возможна поэтапная оплата. Работаем по договору с юридическими и физическими лицами."
        }
    ],

    team: {
        description: "Наша команда — это более 50 профессионалов: разработчики, дизайнеры, проектные менеджеры, аналитики и QA-инженеры.",
        expertise: ["Frontend-разработка", "Backend-разработка", "Mobile Development", "UI/UX дизайн", "DevOps", "Data Science", "Project Management"]
    },

    portfolio: [
        {
            name: "Финансовый портал для банка",
            description: "Разработка личного кабинета для крупного банка с интеграцией платёжных систем"
        },
        {
            name: "Маркетплейс для фермеров",
            description: "Платформа для продажи сельхозпродукции напрямую от производителей"
        },
        {
            name: "Мобильное приложение доставки",
            description: "Приложение для службы доставки еды с геолокацией и онлайн-оплатой"
        },
        {
            name: "Корпоративный портал",
            description: "Внутренний портал для компании с 500+ сотрудников"
        }
    ],

    keywords: {
        greeting: ["привет", "здравствуй", "добрый день", "добрый вечер", "доброе утро", "хай", "hello", "hi", "хеллоу"],
        services: ["услуги", "сервис", "что делаете", "чем занимаетесь", "предложения", "возможности"],
        prices: ["цена", "стоимость", "сколько стоит", "прайс", "тариф", "расценки", "бюджет", "дорого", "дёшево"],
        contacts: ["контакт", "телефон", "почта", "email", "адрес", "связаться", "позвонить", "написать", "где находитесь", "офис"],
        hours: ["график", "время работы", "часы работы", "когда работаете", "режим работы", "расписание"],
        guarantee: ["гарантия", "возврат", "поддержка", "sla", "ответственность", "обязательства"],
        payment: ["оплата", "платёж", "как платить", "способы оплаты", "предоплата", "рассрочка"],
        technologies: ["технологии", "стек", "языки программирования", "фреймворк", "react", "python", "node"],
        mobile: ["мобильн", "приложение", "ios", "android", "телефон", "смартфон"],
        web: ["сайт", "веб", "web", "лендинг", "портал", "интернет-магазин"],
        bot: ["бот", "чат-бот", "telegram", "автоматизация", "whatsapp"],
        team: ["команда", "специалисты", "разработчики", "сотрудники", "эксперты"],
        portfolio: ["портфолио", "примеры", "кейсы", "проекты", "работы", "клиенты"],
        start: ["начать", "заказать", "оформить", "сотрудничество", "работать с вами"],
        thanks: ["спасибо", "благодарю", "благодарность"],
        bye: ["пока", "до свидания", "всего доброго", "до встречи"]
    }
};

// Response generator based on keywords
function findResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    const kb = knowledgeBase;
    const kw = kb.keywords;

    // Greeting
    if (kw.greeting.some(word => message.includes(word))) {
        return {
            text: `Здравствуйте! Я виртуальный помощник компании <strong>VЛАДОНИ</strong>. Чем могу помочь?`,
            quickReplies: ["Услуги", "Цены", "Контакты", "Как начать работу?"]
        };
    }

    // Thanks
    if (kw.thanks.some(word => message.includes(word))) {
        return {
            text: "Пожалуйста! Рад был помочь. Если у вас возникнут ещё вопросы — обращайтесь!",
            quickReplies: ["Услуги", "Контакты"]
        };
    }

    // Bye
    if (kw.bye.some(word => message.includes(word))) {
        return {
            text: "До свидания! Будем рады видеть вас снова. Успехов вашему бизнесу!",
            quickReplies: []
        };
    }

    // Services
    if (kw.services.some(word => message.includes(word))) {
        let servicesHtml = `<p>Компания <strong>VЛАДОНИ</strong> предоставляет следующие услуги:</p><ul>`;
        kb.services.forEach(service => {
            servicesHtml += `<li><strong>${service.name}</strong> — ${service.price}</li>`;
        });
        servicesHtml += `</ul><p>О какой услуге рассказать подробнее?</p>`;
        return {
            text: servicesHtml,
            quickReplies: ["Веб-разработка", "Мобильные приложения", "Чат-боты", "Цены"]
        };
    }

    // Web development
    if (kw.web.some(word => message.includes(word))) {
        const service = kb.services.find(s => s.id === 1);
        return {
            text: `<div class="info-card">
                <div class="info-card-title">${service.name}</div>
                <div class="info-card-content">${service.description}</div>
            </div>
            <p><strong>Стоимость:</strong> ${service.price}</p>
            <p><strong>Сроки:</strong> ${service.duration}</p>
            <p><strong>Что входит:</strong></p>
            <ul>${service.features.map(f => `<li>${f}</li>`).join('')}</ul>`,
            quickReplies: ["Заказать", "Другие услуги", "Портфолио"]
        };
    }

    // Mobile development
    if (kw.mobile.some(word => message.includes(word))) {
        const service = kb.services.find(s => s.id === 2);
        return {
            text: `<div class="info-card">
                <div class="info-card-title">${service.name}</div>
                <div class="info-card-content">${service.description}</div>
            </div>
            <p><strong>Стоимость:</strong> ${service.price}</p>
            <p><strong>Сроки:</strong> ${service.duration}</p>
            <p><strong>Технологии:</strong></p>
            <ul>${service.features.map(f => `<li>${f}</li>`).join('')}</ul>`,
            quickReplies: ["Заказать", "Другие услуги", "Примеры работ"]
        };
    }

    // Bots and automation
    if (kw.bot.some(word => message.includes(word))) {
        const service = kb.services.find(s => s.id === 6);
        return {
            text: `<div class="info-card">
                <div class="info-card-title">${service.name}</div>
                <div class="info-card-content">${service.description}</div>
            </div>
            <p><strong>Стоимость:</strong> ${service.price}</p>
            <p><strong>Сроки:</strong> ${service.duration}</p>
            <p><strong>Возможности:</strong></p>
            <ul>${service.features.map(f => `<li>${f}</li>`).join('')}</ul>`,
            quickReplies: ["Заказать бота", "Примеры ботов", "Цены"]
        };
    }

    // Prices
    if (kw.prices.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Стоимость услуг VЛАДОНИ:</strong></p>
            <ul>
                <li>Веб-разработка — от 150 000 ₽</li>
                <li>Мобильные приложения — от 300 000 ₽</li>
                <li>IT-консалтинг — от 50 000 ₽</li>
                <li>Техническая поддержка — от 30 000 ₽/мес</li>
                <li>Интеграция систем — от 80 000 ₽</li>
                <li>Чат-боты — от 45 000 ₽</li>
            </ul>
            <p><strong>Скидки:</strong></p>
            <ul>
                <li>${kb.pricing.discounts.startup}</li>
                <li>${kb.pricing.discounts.longterm}</li>
                <li>${kb.pricing.discounts.referral}</li>
            </ul>`,
            quickReplies: ["Как оплатить?", "Рассчитать проект", "Контакты"]
        };
    }

    // Payment
    if (kw.payment.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Способы оплаты:</strong></p>
            <ul>
                ${kb.pricing.paymentMethods.map(m => `<li>${m}</li>`).join('')}
            </ul>
            <p><strong>Условия:</strong> ${kb.pricing.paymentTerms}</p>
            <p>Для крупных проектов возможна поэтапная оплата. Работаем с юридическими и физическими лицами по договору.</p>`,
            quickReplies: ["Заключить договор", "Контакты", "Цены"]
        };
    }

    // Contacts
    if (kw.contacts.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Контакты VЛАДОНИ:</strong></p>
            <div class="info-card">
                <div class="info-card-title">Телефоны</div>
                <div class="info-card-content">
                    ${kb.contacts.phone}<br>
                    ${kb.contacts.phoneSupport}
                </div>
            </div>
            <p><strong>Email:</strong> ${kb.contacts.email}</p>
            <p><strong>Поддержка:</strong> ${kb.contacts.supportEmail}</p>
            <p><strong>Telegram:</strong> ${kb.contacts.telegram}</p>
            <p><strong>Адрес:</strong> ${kb.contacts.address}</p>`,
            quickReplies: ["Время работы", "Написать в поддержку", "Заказать звонок"]
        };
    }

    // Working hours
    if (kw.hours.some(word => message.includes(word))) {
        return {
            text: `<p><strong>График работы VЛАДОНИ:</strong></p>
            <p>${kb.contacts.workingHours}</p>
            <p>Техническая поддержка для клиентов с пакетом "Премиум" работает <strong>24/7</strong>.</p>
            <p>Вы также можете оставить заявку на сайте в любое время — мы свяжемся с вами в рабочие часы.</p>`,
            quickReplies: ["Контакты", "Оставить заявку"]
        };
    }

    // Guarantee
    if (kw.guarantee.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Гарантии VЛАДОНИ:</strong></p>
            <ul>
                <li>${kb.guarantee.warranty}</li>
                <li>${kb.guarantee.support}</li>
                <li>${kb.guarantee.bugFixes}</li>
                <li>${kb.guarantee.sla}</li>
                <li>${kb.guarantee.refund}</li>
            </ul>
            <p>Мы несём полную ответственность за качество своих услуг и всегда идём навстречу клиентам.</p>`,
            quickReplies: ["Услуги", "Контакты", "Заключить договор"]
        };
    }

    // Technologies
    if (kw.technologies.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Технологический стек VЛАДОНИ:</strong></p>
            <p><strong>Frontend:</strong> React, Vue.js, TypeScript, Next.js</p>
            <p><strong>Backend:</strong> Node.js, Python, Go, PHP</p>
            <p><strong>Мобильные:</strong> React Native, Flutter, Swift, Kotlin</p>
            <p><strong>Базы данных:</strong> PostgreSQL, MongoDB, Redis</p>
            <p><strong>Инфраструктура:</strong> AWS, Docker, Kubernetes, CI/CD</p>
            <p>Выбор технологий зависит от задач конкретного проекта.</p>`,
            quickReplies: ["Заказать разработку", "Портфолио", "Контакты"]
        };
    }

    // Team
    if (kw.team.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Команда VЛАДОНИ:</strong></p>
            <p>${kb.team.description}</p>
            <p><strong>Экспертиза:</strong></p>
            <ul>${kb.team.expertise.map(e => `<li>${e}</li>`).join('')}</ul>
            <p>Каждый проект ведёт выделенный менеджер, который координирует работу команды и поддерживает связь с клиентом.</p>`,
            quickReplies: ["Портфолио", "Услуги", "Контакты"]
        };
    }

    // Portfolio
    if (kw.portfolio.some(word => message.includes(word))) {
        let portfolioHtml = `<p><strong>Примеры наших проектов:</strong></p>`;
        kb.portfolio.forEach(project => {
            portfolioHtml += `<div class="info-card">
                <div class="info-card-title">${project.name}</div>
                <div class="info-card-content">${project.description}</div>
            </div>`;
        });
        portfolioHtml += `<p>Подробное портфолио с кейсами доступно на нашем сайте.</p>`;
        return {
            text: portfolioHtml,
            quickReplies: ["Заказать проект", "Услуги", "Контакты"]
        };
    }

    // How to start
    if (kw.start.some(word => message.includes(word))) {
        return {
            text: `<p><strong>Как начать работу с VЛАДОНИ:</strong></p>
            <ol>
                <li><strong>Оставьте заявку</strong> — позвоните, напишите на email или заполните форму на сайте</li>
                <li><strong>Бесплатная консультация</strong> — обсудим ваши задачи и предложим решение</li>
                <li><strong>Коммерческое предложение</strong> — подготовим детальную смету и план работ</li>
                <li><strong>Заключение договора</strong> — оформляем все юридические документы</li>
                <li><strong>Старт проекта</strong> — приступаем к разработке!</li>
            </ol>
            <p>Первичная консультация <strong>бесплатна</strong> и ни к чему не обязывает.</p>`,
            quickReplies: ["Оставить заявку", "Контакты", "Цены"]
        };
    }

    // FAQ check
    const faqMatch = kb.faq.find(item =>
        message.includes(item.question.toLowerCase().slice(0, 20)) ||
        item.question.toLowerCase().split(' ').filter(w => w.length > 4).some(word => message.includes(word))
    );
    if (faqMatch) {
        return {
            text: `<p><strong>${faqMatch.question}</strong></p><p>${faqMatch.answer}</p>`,
            quickReplies: ["Другой вопрос", "Контакты", "Услуги"]
        };
    }

    // Default response
    return {
        text: `<p>Извините, я не совсем понял ваш вопрос. Я могу помочь с информацией о:</p>
        <ul>
            <li><strong>Услугах</strong> — веб-разработка, мобильные приложения, чат-боты</li>
            <li><strong>Ценах</strong> — стоимость услуг и условия оплаты</li>
            <li><strong>Контактах</strong> — как связаться с нами</li>
            <li><strong>Гарантиях</strong> — наши обязательства перед клиентами</li>
            <li><strong>Портфолио</strong> — примеры выполненных проектов</li>
        </ul>
        <p>Попробуйте сформулировать вопрос иначе или выберите тему ниже.</p>`,
        quickReplies: ["Услуги", "Цены", "Контакты", "Как начать работу?"]
    };
}
