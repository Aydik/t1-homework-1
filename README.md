# Трекер задач

Простое SPA-приложение на React + TypeScript для управления списком задач с возможностью редактирования. Вдохновлено
интерфейсами Trello и Jira.

## Возможности

- Просмотр задач в виде карточек
- Создание и удаление задачи
- Фильтрация задач
- Детальная страница задачи с формой редактирования
- Навигация без перезагрузки (SPA)
- Адаптивный интерфейс для мобильных и десктопных устройств
- Функция имитирующая работу сервера

## Стек технологий

- **React + TypeScript**
- **Vite** – сборка проекта
- **React Router v6** – маршрутизация
- **AdmiralDS** – UI-компоненты
- **css-modules** – стилизация

## Маршруты

- `/` — Главная страница со списком задач
- `/task/:id` — Страница редактирования задачи
- `/task/new` — Страница создания задачи

## Эндпоинты Fake API

- GET `/tasks` — Получение всех задач
- GET `/tasks/:id` — Получение задачи по id
- DELETE `/tasks/:id` — Удаление задачи по id
- PATCH `/tasks/:id` — Обновление задачи по id
- POST `/tasks` — Создание задачи
- POST `/tasks/init` — Заполнение задач mock-данными

## Запуск проекта

**Откройте в браузере:**

   ```sh
   https://aydik.github.io/t1-homework-1/
   ```

Или

1. **Клонируйте репозиторий:**
   ```sh 
   git clone https://github.com/Aydik/t1-homework-1
   ```
2. **Установите зависимости:**
   ```sh
   npm install
   ```
3. **Запустите приложение:**
   ```sh
   npm run dev
   ```
4. **Откройте в браузере:**
   ```sh
   http://localhost:5173/t1-homework-1/
   ```