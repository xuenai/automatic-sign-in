FROM node:16-alpine
RUN npm install -g pm2
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN mkdir -p /usr/src/sign-app
WORKDIR /usr/src/sign-app
COPY package.json /usr/src/sign-app
RUN npm install
COPY . /usr/src/sign-app

CMD npm start && npx pm2 log

ENV SIGN=sign