FROM harbor.phanescloud.com/replay/node:18-buster-slim

WORKDIR /app

COPY package.json ./

RUN npm install --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]