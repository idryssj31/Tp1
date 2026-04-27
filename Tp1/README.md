# TP1 - Microservices NestJS (gRPC)

Monorepo NestJS avec 2 microservices :

- `greeter-service` : serveur gRPC (`Greeter.SayHello`)
- `client-service` : API HTTP qui appelle `greeter-service` via gRPC

Le contrat gRPC est partagé dans `proto/hello.proto`.

Référence : [NestJS Microservices Basics](https://docs.nestjs.com/microservices/basics)

## Prérequis

- Node.js 20+
- pnpm
- Docker + Docker Compose (pour l'exécution conteneurisée)

## Installation

```bash
pnpm install
```

## Exécution en local (sans Docker)

Terminal 1 (serveur gRPC) :

```bash
pnpm exec nest start greeter-service --watch
```

Terminal 2 (API client HTTP) :

```bash
pnpm exec nest start client-service --watch
```

Test :

- `GET http://localhost:3000/hello/Idryss`
- réponse attendue : `{ "message": "Hello Idryss" }`

## Exécution avec Docker

Construire et lancer les 2 services :

```bash
docker compose up --build
```

Test :

- `GET http://localhost:3000/hello/Idryss`

Arrêt :

```bash
docker compose down
```

## Fichiers Docker

- `apps/greeter-service/Dockerfile`
- `apps/client-service/Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

## Build et tests

```bash
pnpm exec nest build greeter-service
pnpm exec nest build client-service
pnpm test
```
