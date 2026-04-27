FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml nest-cli.json tsconfig.json tsconfig.build.json ./
COPY apps/greeter-service ./apps/greeter-service
COPY proto ./proto

RUN pnpm install --frozen-lockfile
RUN pnpm exec nest build greeter-service

FROM node:20-alpine AS runtime
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/proto ./proto

ENV NODE_ENV=production
ENV GRPC_URL=0.0.0.0:50051

EXPOSE 50051
CMD ["node", "dist/apps/greeter-service/main"]
