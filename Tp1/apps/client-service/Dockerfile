FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml nest-cli.json tsconfig.json tsconfig.build.json ./
COPY apps/client-service ./apps/client-service
COPY proto ./proto

RUN pnpm install --frozen-lockfile
RUN pnpm exec nest build client-service

FROM node:20-alpine AS runtime
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/proto ./proto

ENV NODE_ENV=production
ENV PORT=3000
ENV GREETER_URL=greeter-service:50051

EXPOSE 3000
CMD ["node", "dist/apps/client-service/main"]
