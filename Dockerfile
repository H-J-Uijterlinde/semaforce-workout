FROM hypriot/rpi-node

RUN mkdir -p /usr/src/semaforce-front

COPY dist/semaforce-workout /usr/src/semaforce-front/dist/semaforce-workout
COPY server.js /usr/src/semaforce-front/server.js
COPY deploy-package.json /usr/src/semaforce-front/package.json

WORKDIR /usr/src/semaforce-front

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]
