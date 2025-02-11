FROM harbor.phanescloud.com/public/node:18-buster-slim AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM harbor.phanescloud.com/public/node:18-buster-slim AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3000

# 컨테이너 시작 시 애플리케이션 실행
CMD ["npm", "start"]