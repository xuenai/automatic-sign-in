FROM node:14
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm set registry https://registry.npm.taobao.org
RUN npm install -g pm2
RUN npm install

CMD npm start && npx pm2 log

ENV SIGN=sign