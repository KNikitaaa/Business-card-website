.PHONY: help build up down logs clean restart bash-frontend bash-backend format lint

help:
	@echo "Доступные команды:"
	@echo "  make build              - Собрать Docker образы"
	@echo "  make up                 - Запустить контейнеры"
	@echo "  make down               - Остановить контейнеры"
	@echo "  make restart            - Перезагрузить контейнеры"
	@echo "  make logs               - Показать логи"
	@echo "  make logs-backend       - Логи backend"
	@echo "  make logs-frontend      - Логи frontend"
	@echo "  make bash-frontend      - Войти в frontend контейнер"
	@echo "  make bash-backend       - Войти в backend контейнер"
	@echo "  make format             - Форматировать JavaScript код"
	@echo "  make lint               - Проверить Python код"
	@echo "  make clean              - Очистить контейнеры и volumes"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose restart

logs:
	docker-compose logs -f

logs-backend:
	docker-compose logs -f backend

logs-frontend:
	docker-compose logs -f frontend

bash-frontend:
	docker exec -it site-visitka-frontend sh

bash-backend:
	docker exec -it site-visitka-backend bash

format:
	docker exec site-visitka-frontend npm run format

lint:
	docker exec site-visitka-backend flake8 app --jobs=1

clean:
	docker-compose down -v

ps:
	docker-compose ps
