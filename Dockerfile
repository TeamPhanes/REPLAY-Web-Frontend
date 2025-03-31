FROM harbor.phanescloud.com/public/node:18-buster-slim AS builder
WORKDIR /app

COPY . .
RUN npm install && \
    npm run lint && \
    npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]