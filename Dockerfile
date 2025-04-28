FROM harbor.phanescloud.com/public/node:18-buster-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["start"]