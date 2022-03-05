FROM node:14
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm install cnpm -g --registry=https://registry.npmmirror.com
RUN cnpm install -g pm2
RUN cnpm install

CMD npm start && npx pm2 log

ENV SIGN=sign