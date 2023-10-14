# Java build

FROM eclipse-temurin:17-jdk-alpine

ENV APP_NAME auto-info

COPY ./target/${APP_NAME}.jar  /app/${APP_NAME}.jar

WORKDIR /app

CMD java -jar ${APP_NAME}.jar

EXPOSE 8080
