# 📱 Módulo 8 – Desenvolver Aplicativo Móvel com IoT

Este módulo tem como objetivo aplicar conceitos de desenvolvimento mobile integrados com IoT, utilizando tecnologias modernas como React Native (via Expo), backend com Node.js e banco de dados MongoDB.

## 🗂 Estrutura do Projeto

aula01/<br>
└── my-app/<br>
    ├── app/<br>
    │   ├── _layout.tsx<br>
    │   ├── +not-found.tsx<br>
    │   ├── page.tsx<br>
    ├── assets/<br>
    ├── components/<br>
    │   └── [Componentes reutilizáveis]<br>
    ├── dot_main/<br>
    │   ├── index.js<br>
    │   └── package.json<br>
    ├── dot_slash_main/<br>
    │   └── [Arquivos complementares]<br>
    ├── backend/<br>
    │   ├── src/<br>
    │   │   ├── controllers/<br>
    │   │   ├── database/<br>
    │   │   ├── middlewares/<br>
    │   │   ├── models/<br>
    │   │   ├── routes/<br>
    │   │   └── server.ts<br>
    │   ├── package.json<br>
    │   └── .env.example<br>
    ├── package.json<br>
    └── README.md<br>

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **Expo** com **React Native** (TypeScript)
- Navegação com `expo-router`
- Componentização modular com pasta `components`

### Backend
- **Node.js** com **Express**
- **MongoDB** como banco de dados
- Controle de rotas, autenticação e conexão com o banco

---

## 🌐 Funcionalidades

- 📡 Integração com sensores IoT simulados (em breve)
- 🧭 Navegação entre telas com `expo-router`
- 🔒 API segura com autenticação de usuários
- 💾 Armazenamento de dados no MongoDB

---

## 🛠 Como executar

### Backend

```bash
cd aula01/my-app/backend
npm install
cp .env.example .env
# edite as variáveis de ambiente
npm run dev
Frontend
bash
Copiar
Editar
cd aula01/my-app
npm install
npx expo start
📌 Observações
O projeto está em desenvolvimento contínuo.

Os diretórios dot_main e dot_slash_main são utilizados para simulações e testes.

O backend se comunica com o frontend via API RESTful local.

👩‍💻 Desenvolvido por
Rafaela Nunes Ayres
3º semestre de Sistemas de Informação — UNIFACISA
Projeto da disciplina: Aplicações móveis com IoT