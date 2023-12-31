FROM alpine:latest
COPY . .
RUN apk add nodejs npm
RUN npm install 
EXPOSE 5000
CMD [ "node", "server.js" ]
