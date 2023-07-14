FROM keymetrics/pm2:14-alpine

ENV COMPOSER_MEMORY_LIMIT=-1

WORKDIR /var/www/html

COPY . .

RUN npm install && npm run build

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
