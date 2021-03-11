FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci && npm install gatsby-cli -g

COPY . .

EXPOSE 8000

CMD sh -c "./devserver.sh"
