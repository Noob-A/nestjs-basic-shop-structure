# My NestJS Project

This project is a comprehensive backend built with NestJS. It provides functionalities for products, authentication, users, and orders.

## Getting Started

1. Install dependencies:
```bash
npm install
```
2. Create super-user:
```bash
npm run gen-sudo
```
3. Start the DEVELOPMENT server:
```bash
npm run start:dev
```










## Features

- **Products Management**: Allows CRUD operations on products.
- **User Management**: Handle user registrations, updates, and queries.
- **Orders**: Manage user orders.
- **Authentication**: 
  - Uses JWT for authentication.
  - Implements OAuth for third-party authentication.
  - Provides guards for route protection based on roles.

## Directory Structure
```text
src
├── products
│ ├── products.service.ts
│ ├── products.controller.spec.ts
│ ├── products.module.ts
│ ├── products.entity.ts
│ ├── products.controller.ts
│ └── products.dto.ts
├── main.ts
├── auth
│ ├── dto
│ │ └── login.dto.ts
│ ├── auth.controller.ts
│ ├── roles.guard.ts
│ ├── jwt.strategy.ts
│ ├── auth.service.ts
│ └── auth.module.ts
├── app.service.ts
├── app.module.ts
├── users
│ ├── users.entity.ts
│ ├── dto
│ │ ├── update-user.dto.ts
│ │ └── create-user.dto.ts
│ ├── users.service.ts
│ ├── users.controller.ts
│ ├── users.module.ts
│ ├── users.service.spec.ts
│ └── users.controller.spec.ts
├── app.controller.ts
└── orders
├── orders.service.spec.ts
├── orders.controller.spec.ts
├── orders.module.ts
├── orders.controller.ts
├── orders.service.ts
└── orders.entity.ts
```

