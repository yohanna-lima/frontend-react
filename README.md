# Frontend - React.js

Este serviço representa a interface do usuário da To-Do List.

## 📦 Pré-requisitos

- Node.js 18+
- npm
- Docker (opcional)

## ▶️ Rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```
A aplicação estará disponível em: http://localhost:3000

## 🐳 Rodar com Docker
```bash
docker build -t todo-app-frontend-react .
docker run -p 3000:3000 todo-app-frontend-react
