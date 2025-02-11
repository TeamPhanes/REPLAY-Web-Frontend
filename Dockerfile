FROM harbor.phanescloud.com/public/node:18-buster-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY .next ./.next
COPY public ./public

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]