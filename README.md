# Сайт-визитка — Проектная группа

Корпоративный сайт-визитка для проектной компании. Next.js 15 на фронтенде, FastAPI на бэкенде, контактная форма с отправкой на email через SMTP, cookie-баннер, Docker-окружение для разработки и продакшена.

---

## Стек

| Слой | Технология |
|------|-----------|
| Frontend | Next.js 15, React 19, JavaScript, Tailwind CSS 3, Framer Motion |
| Backend | Python 3.12, FastAPI, fastapi-mail, slowapi |
| Email (dev) | Mailpit (localhost:8025) |
| Email (prod) | SMTP mail.ru |
| Rate limiting | Redis 7 |
| Proxy | Nginx |
| Контейнеры | Docker + Docker Compose |

---

## Быстрый старт (разработка)

### Требования

- Docker Desktop
- Git

### Запуск

```bash
git clone https://github.com/KNikitaaa/Business-card-website.git
cd Business-card-website
docker compose -f docker-compose.dev.yml up --build
```

После запуска:

| Сервис | URL |
|--------|-----|
| Сайт | http://localhost:3000 |
| API | http://localhost:8000 |
| API docs | http://localhost:8000/docs |
| Mailpit (входящие письма) | http://localhost:8025 |

Email в dev-режиме перехватывает Mailpit — реальные письма не уходят.

> **Windows**: hot-reload фронтенда не работает через Docker volume. После изменений в `frontend/src/` выполните:
> ```bash
> docker restart site-visitka-frontend-dev
> ```
> Бэкенд (uvicorn --reload) перезагружается автоматически.

---

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная: hero, услуги, проекты, CTA |
| `/projects` | Портфолио с фильтрацией по категориям |
| `/about` | О компании, команда, миссия |
| `/contacts` | Форма обратной связи и контакты |
| `/privacy` | Политика конфиденциальности |

---

## Настройка перед деплоем

Скопируйте `.env.example` в `backend/.env` и заполните:

```bash
cp .env.example backend/.env
```

| Переменная | Описание |
|------------|----------|
| `MAIL_USERNAME` | Логин почты mail.ru |
| `MAIL_PASSWORD` | Пароль приложения (не основной пароль) |
| `MAIL_FROM` | Адрес отправителя (= MAIL_USERNAME на mail.ru) |
| `ADMIN_EMAIL` | Куда приходят заявки с формы |
| `ALLOWED_ORIGINS` | Домен сайта: `["https://yourdomain.ru"]` |

Дополнительно:
- В `nginx/nginx.ssl.conf` замените `proektgroup.ru` на реальный домен
- Получите SSL-сертификат: `certbot --nginx -d yourdomain.ru`

---

## Продакшен

```bash
docker compose up --build -d
```

Nginx слушает на 80/443. HTTPS требует SSL-сертификата (Let's Encrypt).

---

## Защита от спама

- Rate limiting: 5 запросов / 10 минут на IP (slowapi + Redis)
- Honeypot-поле `website` в форме — боты, заполнившие его, получают 400
- Валидация email через Pydantic

---

## API

`POST /api/contact` — отправка заявки с формы

```json
{
  "name": "Иван Иванов",
  "email": "ivan@example.com",
  "phone": "+7 (999) 123-45-67",
  "project_type": "residential",
  "message": "Хочу обсудить проект",
  "privacy_accepted": true
}
```

Swagger UI: http://localhost:8000/docs

---

## Структура проекта

```
├── backend/
│   ├── app/
│   │   ├── api/contact.py       # POST /api/contact
│   │   ├── core/
│   │   │   ├── config.py        # Настройки из .env
│   │   │   ├── email.py         # Отправка письма через FastMail
│   │   │   └── limiter.py       # Rate limiting
│   │   ├── schemas/contact.py   # Pydantic-схемы
│   │   └── main.py
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── app/                 # Next.js App Router
│   │   ├── components/
│   │   │   ├── layout/          # Header, Footer, CookieBanner
│   │   │   └── sections/        # Hero, Services, Projects, ContactForm
│   │   └── data/projects.json   # 6 шаблонных проектов
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── package.json
├── nginx/
│   ├── nginx.conf               # HTTP (dev)
│   └── nginx.ssl.conf           # HTTPS (prod)
├── docker-compose.yml           # Продакшен
├── docker-compose.dev.yml       # Разработка с hot-reload
└── .env.example                 # Шаблон переменных окружения
```

---

© 2025 Проектная группа. Все права защищены.
