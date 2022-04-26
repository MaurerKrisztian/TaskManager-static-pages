FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN npm install -g sass
RUN npm run build

COPY . .

CMD [ "node", "server.js" ]
