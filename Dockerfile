FROM node:25.2.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./tsconfig.json ./

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "serve"]